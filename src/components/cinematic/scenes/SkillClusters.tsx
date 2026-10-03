"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/cinematic/scrollState";

export function SkillClusters() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 18;

  // Generate initial transform data for instanced nodes
  const [nodes, dummy] = useMemo(() => {
    const list = [];
    const dum = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.2 + (i % 3) * 0.4;
      const x = Math.cos(angle) * radius;
      const y = ((i % 5) - 2) * 0.7;
      const z = Math.sin(angle) * radius - 1;

      list.push({
        basePos: [x, y, z] as [number, number, number],
        rotSpeed: (Math.random() - 0.5) * 1.5,
        scale: 0.12 + Math.random() * 0.1,
      });
    }

    return [list, dum];
  }, [count]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Active primarily during Scene 3 (Skills: progress ~0.25 to 0.45)
    const p = scrollState.progress;
    const isSkillsScene = p > 0.18 && p < 0.52;
    const targetScaleMultiplier = isSkillsScene ? 1.0 : 0.05;

    const time = state.clock.getElapsedTime();

    nodes.forEach((node, i) => {
      const floatY = Math.sin(time * 1.5 + i) * 0.15;
      dummy.position.set(
        node.basePos[0] + Math.cos(time * 0.8 + i) * 0.1,
        node.basePos[1] + floatY,
        node.basePos[2]
      );
      dummy.rotation.x += node.rotSpeed * delta;
      dummy.rotation.y += node.rotSpeed * delta * 0.7;

      const s = node.scale * targetScaleMultiplier;
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial
        wireframe
        color="#B6FF2E"
        transparent
        opacity={0.35}
      />
    </instancedMesh>
  );
}
