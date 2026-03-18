import * as THREE from 'three';

import * as dim from '../../dimensions';

import * as mat from './materials';
import { getObjectX, isSprite } from './tools';

export function createSpriteObject(
  type: string,
  opts: { dataType?: string; y?: number } = {},
): THREE.Object3D {
  const material = mat.getSpriteMaterial(type, true);
  const size = dim.sizes[type as keyof typeof dim.sizes] ?? dim.sizes.defaultSize!;

  const { dataType = type, y = size[1] / 2 } = opts;

  const sprite = new THREE.Sprite(material);
  sprite.scale.set(...size, 1);
  // make the object "stand" on the plane by moving its center down instead of moving its position up
  centerSpriteAtHeight(sprite, y);

  sprite.userData.width = size[0];
  sprite.userData.depth = size[0] / 3; // use the third of width as the depth
  sprite.userData.type = dataType;
  sprite.userData.dyingMaterial = `${type}Dying` in mat.sprites ? `${type}Dying` : type;
  return sprite;
}

function centerSpriteAtHeight(sprite: THREE.Sprite, y: number) {
  sprite.center.y = 0.5 - y / sprite.scale.y;
}

function getSpriteCenterHeight(sprite: THREE.Sprite) {
  return (0.5 - sprite.center.y) * sprite.scale.y;
}

// our sprites stand on their bottom on the track
// scaling them makes them grow up or shrink down, with bottom stable
// but sprites like bullets are hovering above their center
// so simply scaling them would move them up and down; this function scales them in place
export function scaleSpriteInPlace(sprite: THREE.Object3D, scale: number) {
  if (isSprite(sprite)) {
    const centerHeight = getSpriteCenterHeight(sprite);
    sprite.scale.multiplyScalar(scale);
    centerSpriteAtHeight(sprite, centerHeight);
  } else {
    throw new TypeError('trying to scale a sprite in place but it is not a sprite');
  }
}

export function doObjectsOverlapInX(
  obj1: THREE.Object3D,
  obj2: THREE.Object3D,
  reach = 1, // bigger reach - conflict occurs when they're farther away
): boolean {
  return (
    Math.abs(getObjectX(obj1) - getObjectX(obj2)) <
    ((getObjectWidth(obj1) + getObjectWidth(obj2)) / 2) * reach
  );
}

export function getObjectWidth(obj: THREE.Object3D): number {
  if (typeof obj.userData.width === 'number') {
    return obj.userData.width;
  } else {
    throw new TypeError('obj does not have a width');
  }
}
