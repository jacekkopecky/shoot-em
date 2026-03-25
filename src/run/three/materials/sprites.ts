import * as THREE from 'three';

import * as dim from '#dimensions';

import { isSprite } from '../tools';

const debugSpriteSize = false;

export const sprites = {
  player: emojiSpriteMaterial('🍄'),
  playerDying: emojiSpriteMaterial('🍄‍🟫'),
  fire: emojiSpriteMaterial('🔥'),
  gems: emojiSpriteMaterial('💎'),
  gem: emojiSpriteMaterial('💎'),
  coins: emojiSpriteMaterial('💰'),
  coin: emojiSpriteMaterial('🟡'),
  object: emojiSpriteMaterial('😀'),
  objectDying: emojiSpriteMaterial('😵'),
  bullet: emojiSpriteMaterial('⚫️'),
  bulletDying: emojiSpriteMaterial('💥'),
  defaultMaterial: new THREE.SpriteMaterial({ color: 0x00dddd }),
} as const;

function emojiSpriteMaterial(emojiCharacter: string): THREE.SpriteMaterial {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;

  // Set the canvas size
  canvas.width = dim.spriteResolution;
  canvas.height = dim.spriteResolution;

  if (debugSpriteSize) {
    ctx.fillStyle = '#fff8';
    ctx.fillRect(0, 0, dim.spriteResolution, dim.spriteResolution);
    ctx.fillStyle = '#000';
  }

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

export function setSpriteMaterial(obj: THREE.Object3D, type?: keyof typeof sprites) {
  if (!type) return;
  if (!isSprite(obj))
    throw new TypeError('cannot set sprite material for an object that is not a sprite');
  obj.material = getSpriteMaterial(type);
}
