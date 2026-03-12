import * as THREE from 'three';

import * as dim from './dimensions.js';

// todo maybe also use some of these: 🍄‍🟫 🟡 😵‍💫
const sprites = {
  player: emojiSpriteMaterial('🍄'),
  object: emojiSpriteMaterial('😀'),
  objectDying: emojiSpriteMaterial('😵'),
  bullet: emojiSpriteMaterial('⚫️'),
  defaultMaterial: new THREE.SpriteMaterial({ color: 0x00dddd }),
} as const;

export const trackMaterial = new THREE.MeshLambertMaterial({ color: 0xccac90 });
export const trackDecorationsMaterial = new THREE.MeshLambertMaterial({
  color: 0xaa8a70,
  flatShading: true,
});

function emojiSpriteMaterial(emojiCharacter: string): THREE.SpriteMaterial {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;

  // Set the canvas size
  canvas.width = dim.spriteResolution;
  canvas.height = dim.spriteResolution;

  ctx.font = `${dim.spriteResolution}px serif`;
  ctx.textAlign = 'center';
  const measure = ctx.measureText(emojiCharacter);
  // adapt measure to actual size as emoji seem to be rendered too big on Android
  ctx.font = `${dim.spriteResolution ** 2 / measure.width}px serif`;
  ctx.fillText(emojiCharacter, dim.spriteResolution / 2, measure.actualBoundingBoxAscent);

  const texture = new THREE.Texture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return new THREE.SpriteMaterial({ map: texture, color: 0xffffff });
}

export function getSpriteMaterial(type: keyof typeof sprites): THREE.SpriteMaterial;
export function getSpriteMaterial(type: string, useDefault: true): THREE.SpriteMaterial;
export function getSpriteMaterial(type: string, useDefault = false): THREE.SpriteMaterial {
  const material = sprites[type as keyof typeof sprites];
  if (material) {
    return material;
  } else if (useDefault) {
    return sprites.defaultMaterial;
  } else {
    throw new TypeError(`no material known for type "${type}"`);
  }
}
