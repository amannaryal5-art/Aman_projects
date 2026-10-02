"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Form({ reduced }: { reduced: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const move = (event: PointerEvent) => {
      target.current = {
        x: ((event.clientY / window.innerHeight) - 0.5) * 0.22,
        y: ((event.clientX / window.innerWidth) - 0.5) * 0.22
      };
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduced]);

  useFrame((_, delta) => {
    if (!mesh.current || reduced) return;
    mesh.current.rotation.y += delta * 0.2;
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, target.current.x, 0.035);
    mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, -target.current.y, 0.035);
  });

  return (
    <mesh ref={mesh} rotation={[0.15, 0, 0.1]}>
      <icosahedronGeometry args={[1.65, 2]} />
      <meshBasicMaterial color="#6d6cff" wireframe transparent opacity={0.72} />
    </mesh>
  );
}

export default function HeroObject() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => setVisible(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (!visible) return null;
  return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true, antialias: true }}><Form reduced={Boolean(reduced)} /></Canvas>;
}
