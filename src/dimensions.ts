export const sizes: Record<string, [number, number]> = {
  bullet: [3, 3],
  defaultSize: [15, 15],
  player: [15, 15],
} as const;
export const spriteResolution = 64;

export const trackLength = 400;
export const trackWidth = 100;
export const trackDecorationN = 20;
export const trackDecorationLength = 8;
export const trackDecorationThickness = 3;

export const startDistance = -50; // -trackLength;
export const behindCamera = 50;

export const N = 100;
export const objectSpeedPerSecond = 10;
export const objectDyingDuration = 0.3;
export const objectHitPoints = 1;

export const playerShotTime = 1;
export const playerBulletRange = 40;
export const playerBulletLength = 2;
export const playerBulletSpeed = 40;
export const playerBulletHitPoints = 1;

export const cameraPosition = [0, 130, 50] as const;
export const cameraTarget = [0, 0, -100] as const;
export const cameraFoV = 90;

export const cameraToTrackEndLength = trackLength + cameraPosition[2];

export const FINGER_WIDTH_PERCENT = 25;
