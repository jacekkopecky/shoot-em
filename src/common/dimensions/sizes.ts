import * as dim from './dimensions';

export const spriteSizes: Record<string, [number, number]> = {
  coin: [4, 4],
  defaultSize: [15, 25],
} as const;
export const spriteResolution = 64;

export const bouldersPerEndRow = 4;

export const modelSizes = {
  conifer: [20, 35],
  broadLeaf: [20, 25],
  player: [4, 16], // for marvin, it's best 1/4
  gem: [10, 10],
  bag: [6, 6],
  gatePost: [2, 20],
  boulder: [dim.trackWidth / bouldersPerEndRow - 3, 25],

  // bullets: it's tetrahedron-radius(ish) and extent radius
  // extent radius = 0 means bullets act as tiny - kill when they're in the object, but they can graze an object harmlessly
  bullet: [3, 0],
  bulletDying: [6, 6],
} as const;

const rawGateTypes = {
  end: {
    // puth the posts in the middle of track decorations
    w: dim.trackWidth + dim.trackDecorationThickness,
    d: 100,
    color: 0x00aaff,
  },
  other: {
    w: 20,
    color: 0x008800,
  },
} as const;

interface GateType {
  w: number;
  d?: number;
  color: number;
}

export type Gate = keyof typeof rawGateTypes;
export const gateTypes: Record<Gate, GateType> = rawGateTypes;
