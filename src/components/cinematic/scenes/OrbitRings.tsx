"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/cinematic/scrollState";

export function OrbitRings() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Slow atmospheric rotation
    if (ring1.current) ring1.current.rotation.z += delta * 0.15;
    if (ring2.current) ring2.current.rotation.z -= delta * 0.12;
    if (ring3.current) ring3.current.rotation.z += delta * 0.1;

    // Fade in visibility during Scene 4 & 5 (Experience & Education: progress ~0.35 to 0.75)
    const p = scrollState.progress;
    const isVisibleRange = p >= 0.25 && p <= 0.85;
    const targetOpacity = isVisibleRange ? 0.35 : 0.08;

    [ring1, ring2, ring3].forEach((r) => {
      if (r.current) {
        const mat = r.current.material as THREE.MeshBasicMaterial;
        mat.opacity += (targetOpacity - mat.opacity) * 0.05;
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Gate 1 */}
      <mesh ref={ring1} position={[0, 0.5, 1]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.012, 16, 64]} />
        <meshBasicMaterial color="#B6FF2E" transparent opacity={0.15} />
      </mesh>

      {/* Gate 2 */}
      <mesh ref={ring2} position={[0, -0.6, -0.5]} rotation={[-Math.PI / 5, Math.PI / 6, 0]}>
        <torusGeometry args={[2.6, 0.015, 16, 64]} />
        <meshBasicMaterial color="#F1F2F4" transparent opacity={0.12} />
      </mesh>

      {/* Gate 3 */}
      <mesh ref={ring3} position={[0, -1.8, -2]} rotation={[Math.PI / 3, -Math.PI / 4, 0]}>
        <torusGeometry args={[3.0, 0.012, 16, 64]} />
        <meshBasicMaterial color="#B6FF2E" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}
