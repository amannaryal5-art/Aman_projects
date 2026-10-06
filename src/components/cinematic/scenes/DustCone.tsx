"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/cinematic/scrollState";

interface DustConeProps {
  count?: number;
}

export function DustCone({ count = 160 }: DustConeProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle positions once within a conical volume
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Height along cone: y from -4 to 4
      const y = (Math.random() - 0.5) * 8;
      const coneRadius = Math.max(0.2, (4 - y) * 0.45);
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * coneRadius;

      const idx = i * 3;
      pos[idx] = Math.cos(angle) * r;
      pos[idx + 1] = y;
      pos[idx + 2] = Math.sin(angle) * r;
    }

    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    // Smooth transform animation without CPU vertex buffer mutation
    const velocityInfluence = scrollState.velocity * 0.02;
    pointsRef.current.position.y -= (0.12 + velocityInfluence) * delta;
    pointsRef.current.rotation.y += delta * 0.04;

    // Wrap around smoothly
    if (pointsRef.current.position.y < -3.5) {
      pointsRef.current.position.y = 3.5;
    }
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
        size={0.032}
        color="#B6FF2E"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
