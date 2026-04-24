import * as THREE from 'three';

import * as dim from '#dimensions';

const fieldTopRatio = 0.9;
const [w, h] = dim.modelSizes.gatePost;

const postGeo = new THREE.BoxGeometry(w, h, w).translate(0, h / 2, 0);

export function createGateModel(width: number, color: THREE.ColorRepresentation = 0x00aaff) {
  const postMaterial = new THREE.MeshLambertMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.3,
    flatShading: true,
  });

  const fieldColor = new THREE.Color(color);
  const hsl = fieldColor.getHSL({} as THREE.HSL);
  fieldColor.setHSL(hsl.h, hsl.s / 2, hsl.l ** 0.7);

  const fieldMaterial = new THREE.MeshBasicMaterial({
    color: fieldColor,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,
  });

  const fieldH = h * fieldTopRatio;
  const fieldGeo = new THREE.PlaneGeometry(width, fieldH).translate(0, fieldH / 2, 0);
  const obj = new THREE.Mesh(fieldGeo, fieldMaterial);
  obj.add(new THREE.Mesh(postGeo, postMaterial).translateX(-width / 2));
  obj.add(new THREE.Mesh(postGeo, postMaterial).translateX(width / 2));
  return obj;
}
