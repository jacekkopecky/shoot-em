/**
 * This file prepares all the Three.js resources used by the model - textures, materials and
 * geometries.
 */

import * as THREE from 'three';

import { sizes, spriteResolution, trackLength, trackWidth } from './dimensions.js';

// todo maybe also use some of these: 🍄‍🟫 🟡 😵‍💫
const materials = {
  player: emojiSpriteMaterial('🍄'),
  object: emojiSpriteMaterial('😀'),
  objectDying: emojiSpriteMaterial('😵'),
  bullet: emojiSpriteMaterial('⚫️'),
  defaultMaterial: new THREE.SpriteMaterial({ color: 0x00dddd }),
} as const;

const trackMaterial = new THREE.MeshBasicMaterial({ color: 0xccac90 });

export function createObject(type: string): THREE.Object3D {
  const material = materials[type as keyof typeof materials] ?? materials.defaultMaterial;
  const size = sizes[type as keyof typeof sizes] ?? sizes.defaultSize!;

  const sprite = new THREE.Sprite(material);
  sprite.scale.set(...size, 1);
  sprite.position.y = size[1] / 2;
  sprite.userData.width = size[0];
  return sprite;
}

export function getSpriteMaterial(type: string): THREE.SpriteMaterial {
  const material = materials[type as keyof typeof materials];
  if (!material) throw new TypeError(`no material known for type "${type}"`);
  return material;
}

export function createTrack(): THREE.Object3D {
  const material = trackMaterial;

  const geometry = new THREE.PlaneGeometry(trackWidth, trackLength * 2);
  geometry.rotateX(-Math.PI / 2);

  const track = new THREE.Mesh(geometry, material);
  return track;
}

function emojiSpriteMaterial(emojiCharacter: string): THREE.SpriteMaterial {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;

  // Set the canvas size
  canvas.width = spriteResolution;
  canvas.height = spriteResolution;

  ctx.font = `${spriteResolution}px serif`;
  ctx.textAlign = 'center';
  const measure = ctx.measureText(emojiCharacter);
  // adapt measure to actual size as emoji seem to be rendered too big on Android
  ctx.font = `${spriteResolution ** 2 / measure.width}px serif`;
  ctx.fillText(emojiCharacter, spriteResolution / 2, measure.actualBoundingBoxAscent);

  const texture = new THREE.Texture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return new THREE.SpriteMaterial({ map: texture, color: 0xffffff });
}
