"use client";

import { TheSpark } from "./TheSpark";
import { DustCone } from "./DustCone";
import { OrbitRings } from "./OrbitRings";
import { SkillClusters } from "./SkillClusters";
import { GridFloor } from "./GridFloor";
import type { MediaTier } from "@/config/motion";

interface SceneSetProps {
  tier: MediaTier;
}

export function SceneSet({ tier }: SceneSetProps) {
  const isLow = tier === "low";
  const isMid = tier === "mid";

  return (
    <>
      {/* Cinematic Lighting Setup */}
      <ambientLight color="#181A20" intensity={1.2} />
      <spotLight
        position={[0, 6, 2.5]}
        target-position={[0, 0, 0]}
        color="#B6FF2E"
        intensity={2.2}
        angle={0.65}
        penumbra={0.9}
      />
      <directionalLight position={[-4, 3, -2]} color="#F1F2F4" intensity={0.4} />

      {/* Hero Spark */}
      <TheSpark />

      {/* Ambient Atmospheric Dust Particles */}
      {!isLow && <DustCone count={isMid ? 100 : 200} />}

      {/* Orbit Ring Gates for Experience Scenes */}
      <OrbitRings />

      {/* Skills Matrix Node Cluster */}
      {!isLow && <SkillClusters />}

      {/* Perspective Floor */}
      <GridFloor />
    </>
  );
}
