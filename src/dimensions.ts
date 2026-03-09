export const sizes: Record<string, [number, number]> = {
  defaultSize: [6, 10],
} as const;

export const trackLength = 400;
export const trackWidth = 100;

export const objectSpeedPerSecond = 10;

export const cameraPosition = [0, 60, 50] as const;
export const cameraTarget = [0, 0, -100] as const;
export const cameraFoV = 90;

export const cameraToTrackEndLength = trackLength + cameraPosition[2];
