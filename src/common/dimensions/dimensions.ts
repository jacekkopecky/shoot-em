import * as THREE from 'three';

export const options: Record<string, unknown> = {
  // fpsLogging: true,
  // showingExtents: true,
  // timeScale: 0.1,
  // stopCamera: false,
};

export const trackLength = 400;
export const trackWidth = 100;
export const trackDecorationN = 20;
export const trackDecorationLength = 8;
export const trackDecorationThickness = 3;

export const initialEnergyMax = 11;
export const energyGainInterval = 60 * 60 * 1000; // get new energy every 60 minutes

export const startDistance = 50;
export const endDistance = 35;
export const behindCamera = 100;
export const shadowsEnabled = true;

export const objectDyingDuration = 0.3;
export const treeDyingDuration = 0.5;
export const gemRotationsPerSecond = 0.5;

export const runAwardsTargetCoordinates = [0.95, 0.95] as const;
export const runAwardsFlyDuration = 0.8;

export const countupMaxTime = 0.6; // for counting up when awards fly to the wallet

export const initialPlayerShotsPerSecond = 1;
export const playerBulletRangeMaxBonusPerCardType = 20;
export const initialPlayerBulletRange = 40;

export const playerSpeedPerSecond = 10;
export const playerBulletLength = 2;
export const playerBulletSpeed = 40;
export const playerBulletDyingDuration = 0.2;
export const playerDyingDuration = 0.6;
export const bulletRotationsPerSecond = 8;

export const initialDamageMaxUpgrade = 6;
export const initialRateMaxUpgrade = 6;
export const initialPlayersMaxUpgrade = 5;
export const initialDamageUpgradePrice = 1;
export const initialRateUpgradePrice = 1;
export const initialPlayersUpgradePrice = 1;
export const initialStartingPlayers = 1;

// rewards
export const initialCoinsPerLevel = 20;
export const initialEndBlockCoinsPerLevel = 0;
export const initialGemsPerLevel = 3;

// costs
export const cardPriceGems = 5;
export const cardBulkCount = 9;

// hit points
export const initialObjectHitPoints = 1;
export const initialPlayerHitPoints = initialObjectHitPoints;
export const initialPlayerBulletHitPoints = initialObjectHitPoints;
export const initialGemHitPoints = 3;
export const initialMaxEndBlockHitPoints = 6;
export const difficultyIncreasePerLevel = 1.05;

// a run takes 60-ish seconds
export const runLength = 60 * playerSpeedPerSecond - startDistance;
export const maxCoinBagsPerRun = 10;

export const cameraPosition = new THREE.Vector3(0, 100, 100);
export const cameraDirection = new THREE.Vector3(0, -100, -200);

// position for debugging bullets
// export const cameraPosition = new THREE.Vector3(70, 70, 10);
// export const cameraDirection = new THREE.Vector3(-70, -70, -20);
// options.stopCamera = true;
// options.timeScale = 0.1;

export const cameraTarget = cameraPosition.clone().addScaledVector(cameraDirection, 4);
export const cameraFoV = 60;
export const cameraTweenDurationSec = 0.2;
export const cameraLongMoveDurationSec = 1;

export const cameraToTrackEndLength = Math.sqrt(
  (trackLength + cameraPosition.z) ** 2 + cameraPosition.y ** 2,
);

export const FINGER_WIDTH_PERCENT = 30;
