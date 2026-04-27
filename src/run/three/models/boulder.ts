import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

import * as dim from '#dimensions';
import * as mat from '../materials';

const [w, h] = dim.modelSizes.boulder;
const r = (w / 2) * Math.sqrt(2);

const top = 0.13;

const topR = r - h * top * Math.sqrt(2);
const topR2 = topR * Math.sqrt(2);

const geo = BufferGeometryUtils.mergeGeometries([
  // no bottom side, will never see it
  new THREE.PlaneGeometry(topR2, topR2).rotateX(-Math.PI / 2).translate(0, h, 0),
  new THREE.LatheGeometry(
    [
      [r * 0.8, 0],
      [r, h * 0.4],
      [r, h * (1 - top)],
      [topR, h],
    ].map((arr) => new THREE.Vector2(...arr)),
    4,
  ).rotateY(Math.PI / 4),
]);

export function createBoulderModel(material: THREE.Material = mat.colorFlatMaterials.beige1) {
  const retval = new THREE.Mesh(geo, material);
  retval.receiveShadow = true;
  retval.castShadow = true;
  return retval;
}
