import * as THREE from 'three';

import * as dim from '#dimensions';

export const gemColor = new THREE.MeshStandardMaterial({
  color: 0x44bbff,
  emissive: 0x44bbff,
  emissiveIntensity: 2.2,
  flatShading: true,
  transparent: true,
  metalness: 3,
  roughness: 0.2,
  opacity: 0.5,
  side: THREE.DoubleSide,
});

const [dia, h] = dim.modelSizes.gem;
const w = dia / 2;
const h2 = h / 2;

const crownRatio = 0.8;

const geo = new THREE.LatheGeometry(
  [
    [0, -h2],
    [w, h * crownRatio - h2],
    [w * (1 - (1 - crownRatio) * 2), h2],
    [0, h2],
  ].map((arr) => new THREE.Vector2(...arr)),
  6,
);

export function createGemModel() {
  return new THREE.Mesh(geo, gemColor);
}
