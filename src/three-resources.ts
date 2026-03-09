/**
 * This file prepares all the Three.js resources used by the model - textures, materials and
 * geometries.
 */

import * as Three from 'three';

import { sizes, trackLength, trackWidth } from './dimensions.js';

const materials = {
  player: new Three.SpriteMaterial({ color: 0xc02020 }),
  defaultMaterial: new Three.SpriteMaterial({ color: 0x00dddd }),
} as const;

const trackMaterial = new Three.MeshBasicMaterial({ color: 0xccac90 });

// todo use some of these: 🍄 🍄‍🟫 🟡 😀

export function createObject(type: string): Three.Object3D {
  const material = materials[type as keyof typeof materials] ?? materials.defaultMaterial;
  const size = sizes[type as keyof typeof sizes] ?? sizes.defaultSize!;

  const sprite = new Three.Sprite(material);
  sprite.scale.set(...size, 1);
  sprite.position.y = size[1] / 2;
  return sprite;
}

export function createTrack(): Three.Object3D {
  const material = trackMaterial;

  const geometry = new Three.PlaneGeometry(trackWidth, trackLength * 2);
  geometry.rotateX(-Math.PI / 2);

  const track = new Three.Mesh(geometry, material);
  return track;
}
