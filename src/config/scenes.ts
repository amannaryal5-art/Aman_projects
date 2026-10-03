export interface SceneConfig {
  id: string;
  index: number;
  label: string;
  act: string;
  anchor: string;
  camera: {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
  };
}

export const SCENES: SceneConfig[] = [
  {
    id: "home",
    index: 0,
    label: "Prologue",
    act: "ACT 01 // PROLOGUE",
    anchor: "#home",
    camera: {
      position: [0, 0, 5],
      target: [0, 0, 0],
      fov: 45,
    },
  },
  {
    id: "about",
    index: 1,
    label: "About",
    act: "ACT 02 // THE ARCHITECT",
    anchor: "#about",
    camera: {
      position: [1.8, -0.6, 4.4],
      target: [0.2, 0, 0],
      fov: 45,
    },
  },
  {
    id: "skills",
    index: 2,
    label: "Skills",
    act: "ACT 03 // THE MATRIX",
    anchor: "#skills",
    camera: {
      position: [-1.5, 0.4, 4.8],
      target: [0, 0, 0],
      fov: 46,
    },
  },
  {
    id: "experience",
    index: 3,
    label: "Experience",
    act: "ACT 04 // THE JOURNEY",
    anchor: "#experience",
    camera: {
      position: [0, -1.2, 4.2],
      target: [0, -0.4, 0],
      fov: 44,
    },
  },
  {
    id: "education",
    index: 4,
    label: "Education",
    act: "ACT 05 // FOUNDATION",
    anchor: "#education",
    camera: {
      position: [1.2, -0.8, 4.5],
      target: [0, -0.2, 0],
      fov: 45,
    },
  },
  {
    id: "projects",
    index: 5,
    label: "Projects",
    act: "ACT 06 // THE WORKS",
    anchor: "#projects",
    camera: {
      position: [0, 0.8, 5.2],
      target: [0, 0, 0],
      fov: 46,
    },
  },
  {
    id: "contact",
    index: 6,
    label: "Contact",
    act: "ACT 07 // TRANSMISSION",
    anchor: "#contact",
    camera: {
      position: [0, 0, 3.8],
      target: [0, 0, 0],
      fov: 42,
    },
  },
];
