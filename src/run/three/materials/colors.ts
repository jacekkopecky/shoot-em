import * as THREE from 'three';

const colors = {
  brown1: 0xccac90,
  brown2: 0xaa8a70,
  brown3: 0x775132,
  green1: 0x44aa44,
  green2: 0x338033,
  green3: 0x008800,
} as const;

export type COLORS = keyof typeof colors;

export const colorMaterials: Record<COLORS, THREE.Material> = Object.fromEntries(
  Object.entries(colors).map(([key, color]) => [
    key,
    new THREE.MeshLambertMaterial({ color, flatShading: false, side: THREE.DoubleSide }),
  ]),
) as unknown as Record<COLORS, THREE.Material>;

export const colorFlatMaterials: Record<COLORS, THREE.Material> = Object.fromEntries(
  Object.entries(colors).map(([key, color]) => [
    key,
    new THREE.MeshLambertMaterial({ color, flatShading: true, side: THREE.DoubleSide }),
  ]),
) as unknown as Record<COLORS, THREE.Material>;
