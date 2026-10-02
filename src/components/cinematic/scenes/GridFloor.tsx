"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/cinematic/scrollState";

export function GridFloor() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((_, delta) => {
    if (!gridRef.current) return;

    // Slowly stream the floor backwards/forwards based on scroll velocity
    const speed = (0.2 + scrollState.velocity * 0.1) * delta;
    gridRef.current.position.z = (gridRef.current.position.z + speed) % 2;

    // Fade in during Projects & Contact scenes (progress > 0.65)
    const p = scrollState.progress;
    const targetOpacity = p > 0.55 ? 0.35 : 0.08;
    const mat = gridRef.current.material as THREE.Material;
    mat.opacity += (targetOpacity - mat.opacity) * 0.05;
  });

  return (
    <primitive
      object={
        new THREE.GridHelper(
          40,
          40,
          new THREE.Color("#B6FF2E"),
          new THREE.Color("#2E323E")
        )
      }
      ref={gridRef}
      position={[0, -2.8, 0]}
    />
  );
}
