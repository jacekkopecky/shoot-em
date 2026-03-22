export const sizes: Record<string, [number, number]> = {
  bullet: [3, 3],
  player: [15, 15],
  fire: [15, 15],
  gems: [10, 10],
  coins: [12, 12],
  coin: [6, 6],
  gem: [8, 8],
  object: [15, 15],
  tree1: [20, 20],
  tree2: [20, 20],
  defaultSize: [15, 25],
} as const;
export const spriteResolution = 64;

export const trackLength = 400;
export const trackWidth = 100;
export const trackDecorationN = 20;
export const trackDecorationLength = 8;
export const trackDecorationThickness = 3;

export const startDistance = -50; // -trackLength;
export const behindCamera = 50;

export const N = 80;
export const objectSpeedPerSecond = 10;
export const objectDyingDuration = 0.3;
export const objectHitPoints = 1;

export const gemHitPoints = 2;
export const gemProbability = 0.05;
export const coinProbability = 0.1;
export const coinAwardMax = 5;

export const runAwardsTargetCoordinates = [0.95, 0.85] as const;
export const runAwardsTargetDepth = 130; // about the distance from the camera to the front player
export const runAwardsFlyTime = 0.8;

export const countupMaxTime = 0.6;

export const playerShotsPerSecond = 1;
export const playerBulletRange = 40;
export const playerBulletLength = 2;
export const playerBulletSpeed = 40;
export const playerBulletHitPoints = 1;
export const playerBulletDyingDuration = 0.2;
export const playerHitPoints = 1;
export const playerDyingDuration = 0.6;

export const cameraPosition = [0, 130, 50] as const;
export const cameraTarget = [0, 0, -100] as const;
export const cameraFoV = 90;

export const cameraToTrackEndLength = trackLength + cameraPosition[2];

export const FINGER_WIDTH_PERCENT = 25;
