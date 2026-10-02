"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { SCENES } from "@/config/scenes";
import { scrollState } from "@/lib/cinematic/scrollState";

export function CameraRig() {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 0, 5));
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));
  const targetPos = useRef(new THREE.Vector3(0, 0, 5));
  const lookTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    // 1. Smooth pointer lerp
    scrollState.pointer.x += (scrollState.pointer.targetX - scrollState.pointer.x) * 0.08;
    scrollState.pointer.y += (scrollState.pointer.targetY - scrollState.pointer.y) * 0.08;

    // 2. Calculate interpolated camera waypoint based on scroll progress
    const progress = Math.max(0, Math.min(1, scrollState.progress));
    const totalSegments = SCENES.length - 1;
    const rawIndex = progress * totalSegments;
    const baseIndex = Math.min(Math.floor(rawIndex), totalSegments - 1);
    const nextIndex = Math.min(baseIndex + 1, totalSegments);
    const segmentProgress = rawIndex - baseIndex;

    const fromScene = SCENES[baseIndex];
    const toScene = SCENES[nextIndex];

    if (fromScene && toScene) {
      // Smooth step easing between scene waypoints
      const t = segmentProgress * segmentProgress * (3 - 2 * segmentProgress);

      const fromP = fromScene.camera.position;
      const toP = toScene.camera.position;
      const fromT = fromScene.camera.target;
      const toT = toScene.camera.target;

      targetPos.current.set(
        fromP[0] + (toP[0] - fromP[0]) * t,
        fromP[1] + (toP[1] - fromP[1]) * t,
        fromP[2] + (toP[2] - fromP[2]) * t
      );

      lookTarget.current.set(
        fromT[0] + (toT[0] - fromT[0]) * t,
        fromT[1] + (toT[1] - fromT[1]) * t,
        fromT[2] + (toT[2] - fromT[2]) * t
      );

      // Subtle mouse parallax tilt
      targetPos.current.x += scrollState.pointer.x * 0.35;
      targetPos.current.y += scrollState.pointer.y * 0.25;
    }

    // 3. Smooth damp camera toward target
    const dampSpeed = Math.min(delta * 4, 0.15);
    currentPos.current.lerp(targetPos.current, dampSpeed);
    currentTarget.current.lerp(lookTarget.current, dampSpeed);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);
  });

  return null;
}
