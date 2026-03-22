import * as THREE from 'three';

import * as dim from '#dimensions';

export function getObjectZ(obj: THREE.Object3D) {
  return (obj.parent?.position?.z ?? 0) + obj.position.z;
}

export function getObjectX(obj: THREE.Object3D) {
  return (obj.parent?.position?.x ?? 0) + obj.position.x;
}

export function isSprite(obj?: THREE.Object3D): obj is THREE.Sprite {
  return Boolean(obj && 'isSprite' in obj && obj.isSprite);
}

export function resetGroup(group: THREE.Group) {
  group.clear();
  group.position.set(0, 0, 0);
}

export function removeGroupChildrenBehindCamera(group: THREE.Group, sortedInZ = true) {
  // remove objects that are now behind the camera
  const toRemove = [];

  for (const child of group.children) {
    if (getObjectZ(child) > dim.behindCamera) {
      toRemove.push(child);
    } else {
      // the objects are sorted front-to-back so no more will be behind camera
      if (sortedInZ) break;
    }
  }

  // remove outside the loop going through all of them
  for (const obj of toRemove) {
    obj.removeFromParent();
  }
}
