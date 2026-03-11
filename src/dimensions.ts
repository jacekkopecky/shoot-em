export const sizes: Record<string, [number, number]> = {
  bullet: [2, 2],
  defaultSize: [10, 10],
  player: [12, 12],
} as const;
export const spriteResolution = 64;

export const trackLength = 400;
export const trackWidth = 100;
export const startDistance = -50; // -trackLength;
export const behindCamera = 50;

export const N = 100;
export const objectSpeedPerSecond = 10;
export const objectDyingDuration = 0.3;

export const cameraPosition = [0, 130, 50] as const;
export const cameraTarget = [0, 0, -100] as const;
export const cameraFoV = 90;

export const cameraToTrackEndLength = trackLength + cameraPosition[2];

export const FINGER_WIDTH_PERCENT = 25;
