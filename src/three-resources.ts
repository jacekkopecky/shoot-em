/**
 * This file prepares all the Three.js resources used by the model - textures, materials and
 * geometries.
 */

import * as THREE from 'three';

import * as dim from './dimensions.js';
import { getObjectX, makeHalfCubeGeometry } from './three.js';

// todo maybe also use some of these: 🍄‍🟫 🟡 😵‍💫
const materials = {
  player: emojiSpriteMaterial('🍄'),
  object: emojiSpriteMaterial('😀'),
  objectDying: emojiSpriteMaterial('😵'),
  bullet: emojiSpriteMaterial('⚫️'),
  defaultMaterial: new THREE.SpriteMaterial({ color: 0x00dddd }),
} as const;

const trackMaterial = new THREE.MeshLambertMaterial({ color: 0xccac90 });
const trackDecorationsMaterial = new THREE.MeshLambertMaterial({
  color: 0xaa8a70,
  flatShading: true,
});

export function createObject(type: string): THREE.Object3D {
  const material = materials[type as keyof typeof materials] ?? materials.defaultMaterial;
  const size = dim.sizes[type as keyof typeof dim.sizes] ?? dim.sizes.defaultSize!;

  const sprite = new THREE.Sprite(material);
  sprite.scale.set(...size, 1);
  sprite.position.y = size[1] / 2;
  sprite.userData.width = size[0];
  sprite.userData.type = type;
  return sprite;
}

export function getSpriteMaterial(type: string): THREE.SpriteMaterial {
  const material = materials[type as keyof typeof materials];
  if (!material) throw new TypeError(`no material known for type "${type}"`);
  return material;
}

export function createTrack(): THREE.Object3D {
  const material = trackMaterial;

  const geometry = new THREE.PlaneGeometry(dim.trackWidth, dim.trackLength * 2);
  geometry.rotateX(-Math.PI / 2);

  const track = new THREE.Mesh(geometry, material);
  return track;
}

export function createTrackDecorations(): THREE.Group {
  const group = new THREE.Group();
  const dist = dim.trackLength / dim.trackDecorationN;

  const length = dim.trackDecorationLength;
  const thickness = dim.trackDecorationThickness;

  const leftGeometry = makeHalfCubeGeometry(false, thickness, thickness, length);
  const rightGeometry = makeHalfCubeGeometry(true, thickness, thickness, length);

  let z = dim.behindCamera + length / 2;
  while (z >= -dim.trackLength - dist * 2) {
    const left = new THREE.Mesh(leftGeometry, trackDecorationsMaterial);
    const right = new THREE.Mesh(rightGeometry, trackDecorationsMaterial);

    left.position.set(-dim.trackWidth / 2 + thickness / 2, thickness / 2, z);
    right.position.set(dim.trackWidth / 2 - thickness / 2, thickness / 2, z);

    group.add(left);
    group.add(right);

    z -= dist;
  }

  group.userData.dist = dist;
  group.userData.nextZ = z;
  return group;
}

export function moveTrackDecorations(decoGroup: THREE.Group, delta: number) {
  decoGroup.position.z += delta * dim.objectSpeedPerSecond;
  const maxZ = dim.behindCamera - decoGroup.position.z;
  const nextZ: number = decoGroup.userData.nextZ;

  let moved = false;
  for (const decoration of decoGroup.children) {
    if (decoration.position.z > maxZ) {
      decoration.position.z = nextZ;
      moved = true;
    }
  }

  if (moved) {
    decoGroup.userData.nextZ -= decoGroup.userData.dist;
  }
}

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

export function doObjectsOverlapInX(obj1: THREE.Object3D, obj2: THREE.Object3D): boolean {
  return (
    Math.abs(getObjectX(obj1) - getObjectX(obj2)) <
    (getObjectWidth(obj1) + getObjectWidth(obj2)) / 2
  );
}

export function getObjectWidth(obj: THREE.Object3D): number {
  if (typeof obj.userData.width === 'number') {
    return obj.userData.width;
  } else {
    throw new TypeError('obj does not have a width');
  }
}
