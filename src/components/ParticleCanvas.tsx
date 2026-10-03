"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type Particle = { position: THREE.Vector3; velocity: THREE.Vector3 };

function Network({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);
  const lines = useRef<THREE.LineSegments>(null);
  const particles = useMemo<Particle[]>(() => Array.from({ length: count }, () => ({
    position: new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(18),
      THREE.MathUtils.randFloatSpread(11),
      THREE.MathUtils.randFloatSpread(5)
    ),
    velocity: new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(0.012),
      THREE.MathUtils.randFloatSpread(0.012),
      THREE.MathUtils.randFloatSpread(0.004)
    )
  })), [count]);
  const pointPositions = useMemo(() => new Float32Array(count * 3), [count]);
  const linePositions = useMemo(() => new Float32Array(count * count * 3), [count]);

  useFrame(() => {
    particles.forEach((particle, index) => {
      particle.position.add(particle.velocity);
      (["x", "y", "z"] as const).forEach((axis) => {
        const edge = axis === "x" ? 9 : axis === "y" ? 5.5 : 2.5;
        if (Math.abs(particle.position[axis]) > edge) particle.velocity[axis] *= -1;
      });
      pointPositions.set(particle.position.toArray(), index * 3);
    });
    if (points.current) points.current.geometry.attributes.position.needsUpdate = true;

    if (lines.current) {
      let cursor = 0;
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          if (particles[i].position.distanceToSquared(particles[j].position) < 3.2) {
            linePositions.set(particles[i].position.toArray(), cursor);
            linePositions.set(particles[j].position.toArray(), cursor + 3);
            cursor += 6;
          }
        }
      }
      lines.current.geometry.setDrawRange(0, cursor / 3);
      lines.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pointPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#B6FF2E" size={0.035} transparent opacity={0.25} sizeAttenuation />
      </points>
      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#B6FF2E" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

export default function ParticleCanvas() {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile (SSR-safe)

  useEffect(() => {
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      || window.innerWidth < 768;
    setIsMobile(mobile);
  }, []);

  // Skip WebGL entirely on mobile - massive perf win
  if (isMobile) return null;

  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 55 }} gl={{ alpha: true, antialias: false }}>
      <Network count={72} />
    </Canvas>
  );
}
