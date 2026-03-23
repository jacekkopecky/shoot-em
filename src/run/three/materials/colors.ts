import * as THREE from 'three';

const colors = {
  brown1: 0xccac90,
  brown2: 0xaa8a70,
  brown3: 0x775132,
  green1: 0x44aa44,
  green2: 0x229022,
  green3: 0x007700,
} as const;

export type COLORS = keyof typeof colors;

const commonProps = {
  side: THREE.DoubleSide,
  // transparent: true,
  // opacity: 0.1,
} as const;

export const colorMaterials: Record<COLORS, THREE.Material> = Object.fromEntries(
  Object.entries(colors).map(([key, color]) => [
    key,
    new THREE.MeshLambertMaterial({ color, flatShading: false, ...commonProps }),
  ]),
) as unknown as Record<COLORS, THREE.Material>;

export const colorFlatMaterials: Record<COLORS, THREE.Material> = Object.fromEntries(
  Object.entries(colors).map(([key, color]) => [
    key,
    new THREE.MeshLambertMaterial({ color, flatShading: true, ...commonProps }),
  ]),
) as unknown as Record<COLORS, THREE.Material>;
