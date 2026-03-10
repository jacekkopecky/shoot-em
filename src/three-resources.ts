/**
 * This file prepares all the Three.js resources used by the model - textures, materials and
 * geometries.
 */

import * as Three from 'three';

import { sizes, spriteResolution, trackLength, trackWidth } from './dimensions.js';

const materials = {
  player: emojiSpriteMaterial('🍄'),
  object: emojiSpriteMaterial('😀'),
  objectDying: emojiSpriteMaterial('😵‍💫'),
  defaultMaterial: new Three.SpriteMaterial({ color: 0x00dddd }),
} as const;

const trackMaterial = new Three.MeshBasicMaterial({ color: 0xccac90 });

// todo use some of these: 🍄 🍄‍🟫 🟡 😀 😵 😵‍💫 ⚫️

export function createObject(type: string): Three.Object3D {
  const material = materials[type as keyof typeof materials] ?? materials.defaultMaterial;
  const size = sizes[type as keyof typeof sizes] ?? sizes.defaultSize!;

  const sprite = new Three.Sprite(material);
  sprite.scale.set(...size, 1);
  sprite.position.y = size[1] / 2;
  sprite.userData.width = size[0];
  return sprite;
}

export function createTrack(): Three.Object3D {
  const material = trackMaterial;

  const geometry = new Three.PlaneGeometry(trackWidth, trackLength * 2);
  geometry.rotateX(-Math.PI / 2);

  const track = new Three.Mesh(geometry, material);
  return track;
}

function emojiSpriteMaterial(emojiCharacter: string): Three.SpriteMaterial {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;

  // Set the canvas size
  canvas.width = spriteResolution;
  canvas.height = spriteResolution;

  ctx.font = `${spriteResolution}px serif`;
  ctx.textAlign = 'center';
  const measure = ctx.measureText(emojiCharacter);
  ctx.fillText(emojiCharacter, spriteResolution / 2, measure.actualBoundingBoxAscent);

  const texture = new Three.Texture(canvas);
  texture.needsUpdate = true;
  return new Three.SpriteMaterial({ map: texture, color: 0xffffff });
}
