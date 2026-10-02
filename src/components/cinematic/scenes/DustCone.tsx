"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/cinematic/scrollState";

interface DustConeProps {
  count?: number;
}

export function DustCone({ count = 180 }: DustConeProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle positions within a conical volume
  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initial = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Height along cone: y from -3 to 4
      const y = (Math.random() - 0.4) * 8;
      // Radius expands downwards: larger radius at lower y
      const coneRadius = Math.max(0.2, (4 - y) * 0.45);
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * coneRadius;

      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;

      const idx = i * 3;
      pos[idx] = x;
      pos[idx + 1] = y;
      pos[idx + 2] = z;

      initial[idx] = x;
      initial[idx + 1] = y;
      initial[idx + 2] = z;
    }

    return [pos, initial];
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    const velocityInfluence = scrollState.velocity * 0.02;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      // Particle drift downwards
      array[idx + 1] -= (0.15 + velocityInfluence) * delta;

      // Wrap around when passing bottom threshold
      if (array[idx + 1] < -4.5) {
        array[idx + 1] = 4.5;
      }

      // Gentle wobble on X and Z
      array[idx] = initialPositions[idx] + Math.sin(delta * 2 + i) * 0.05;
      array[idx + 2] = initialPositions[idx + 2] + Math.cos(delta * 2 + i) * 0.05;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#B6FF2E"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
