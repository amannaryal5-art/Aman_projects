export interface ScrollState {
  progress: number;
  velocity: number;
  direction: number;
  sceneIndex: number;
  sceneProgress: number;
  pointer: {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
  };
}

export const scrollState: ScrollState = {
  progress: 0,
  velocity: 0,
  direction: 1,
  sceneIndex: 0,
  sceneProgress: 0,
  pointer: {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  },
};
