import * as THREE from 'three';

import * as dim from '#dimensions';

import { Circle } from '../types';

import * as mat from './materials';
import { isSprite } from './tools';

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

  // use the third of width as the depth
  const w = size[0];
  sprite.userData.extent2d = new THREE.Box2(
    new THREE.Vector2(-w / 2, -w / 6),
    new THREE.Vector2(w / 2, w / 6),
  );
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

export function intersects(first: THREE.Box2 | Circle, second: THREE.Box2 | Circle): boolean {
  if (first instanceof Circle) {
    if (second instanceof Circle) {
      return first.intersectsCircle(second);
    } else {
      return first.intersectsBox(second);
    }
  } else {
    return second.intersectsBox(first);
  }
}

const _vector1 = new THREE.Vector2();
const _vector2 = new THREE.Vector2();

export function scaleExtent(extent: THREE.Box2 | Circle, n: number) {
  if (extent instanceof THREE.Box2) {
    extent.getCenter(_vector1);
    extent.getSize(_vector2).multiplyScalar(n);
    extent.setFromCenterAndSize(_vector1, _vector2);
  } else {
    extent.radius *= n;
  }
  return extent;
}

export function getExtentTranslatedToPosition(
  obj: THREE.Object3D,
  extent: THREE.Box2 | Circle,
  targetBox: THREE.Box2,
  targetCircle: Circle,
): THREE.Box2 | Circle {
  if (extent instanceof Circle) {
    targetCircle.copy(extent);
    targetCircle.translateXZ(obj.position);
    if (obj.parent?.position) targetCircle.translateXZ(obj.parent.position);
    return targetCircle;
  } else {
    targetBox.copy(extent);
    translateBox2XZ(targetBox, obj.position);
    if (obj.parent?.position) translateBox2XZ(targetBox, obj.parent.position);
    return targetBox;
  }
}

function translateBox2XZ(box: THREE.Box2, pos: THREE.Vector3) {
  box.min.x += pos.x;
  box.max.x += pos.x;
  box.min.y += pos.z;
  box.max.y += pos.z;
}

export function isDying(obj: THREE.Object3D): boolean {
  return obj.userData.dying;
}

export function markAsDying(obj: THREE.Object3D) {
  obj.userData.dying = true;
}

export function getDyingMaterial(obj: THREE.Object3D): keyof typeof mat.sprites | undefined {
  return obj.userData.dyingMaterial;
}
