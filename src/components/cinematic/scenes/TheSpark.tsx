"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/cinematic/scrollState";

export function TheSpark() {
  const groupRef = useRef<THREE.Group>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!groupRef.current || !outerRef.current || !innerRef.current) return;

    // Rotation driven by time and scroll velocity
    const speedBoost = Math.min(Math.abs(scrollState.velocity) * 0.05, 0.4);
    const rotStep = (0.25 + speedBoost) * delta;

    outerRef.current.rotation.x += rotStep;
    outerRef.current.rotation.y += rotStep * 1.3;

    innerRef.current.rotation.x -= rotStep * 1.1;
    innerRef.current.rotation.z += rotStep * 0.8;

    // Scale and position based on scroll progress
    // Hero (0 - 0.2): Full centered scale
    // About (0.2 - 0.4): Moves slightly right, scales down gently
    const p = scrollState.progress;
    const targetScale = Math.max(0.4, 1 - p * 0.9);
    const targetY = (1 - p * 2) * 0.2;

    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.08
    );
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshBasicMaterial
          wireframe
          color="#B6FF2E"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner Wireframe Icosahedron */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshBasicMaterial
          wireframe
          color="#B6FF2E"
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Subtle Central Spark Node */}
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#B6FF2E" />
      </mesh>
      <pointLight color="#B6FF2E" intensity={1.5} distance={3} />
    </group>
  );
}
