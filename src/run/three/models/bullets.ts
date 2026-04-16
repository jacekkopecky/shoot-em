import * as THREE from 'three';

import * as dim from '#dimensions';

export const bulletColor = new THREE.MeshLambertMaterial({ color: 0x444444 });

// ignoring the second part of bullet size
const [dia] = dim.modelSizes.bullet;
const r = dia / 2;

// bullets should have the flat side to us, point towards enemy
const geo = makeTetrahedron(r).rotateX(-Math.PI / 2);

export function createBulletObject() {
  const obj = new THREE.Mesh(geo, bulletColor);
  obj.castShadow = true;
  return obj;
}

function makeTetrahedron(r: number): THREE.BufferGeometry {
  // not using THREE.TetrahedronGeometry because it doesn't stand on a face
  const geometry = new THREE.BufferGeometry();

  // points: standing on 0,1,2, so 2 is away from us (-Z)
  //       3
  //      /.\
  //     / . \
  //    /  .  \
  //   /  .0.  \
  //  /.'     `.\
  // 1 --------- 2

  const yAxis = new THREE.Vector3(0, 1, 0);
  const p0 = new THREE.Vector3(0, 0, -r);
  const p1 = p0.clone().applyAxisAngle(yAxis, (Math.PI * 2) / 3);
  const p2 = p0.clone().applyAxisAngle(yAxis, (-Math.PI * 2) / 3);

  // p3 created from the base, the center of the triangle 012
  const p3 = new THREE.Vector3(0, 0, 0);
  p3.y = Math.sqrt(p0.distanceToSquared(p1) - p3.distanceToSquared(p1));

  const p = [p0, p1, p2, p3] as const;

  // prettier-ignore
  const faces = [
    p[0],p[2],p[1], // bottom
    p[0],p[1],p[3], // front
    p[1],p[2],p[3],
    p[2],p[0],p[3],
  ]

  geometry.setFromPoints(faces);
  geometry.computeVertexNormals();

  geometry.translate(0, -r / 2, 0);

  return geometry;
}
