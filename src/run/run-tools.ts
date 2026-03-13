import * as THREE from 'three';

import * as dim from '../dimensions.js';
import { getObjectZ } from '../three.js';

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
