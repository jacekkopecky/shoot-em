import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import * as trees from '../run/three/models';

// const N = 1800;

const container = document.getElementById('container');

const renderer = new THREE.WebGLRenderer({ antialias: true });
(window as any).renderer = renderer;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

container?.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
// camera.position.set(20, 40, 10); // for earth
camera.position.set(20, 0, 100);

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);
controls.screenSpacePanning = true;

window.addEventListener('resize', onWindowResize);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcccccc);

const helper = new THREE.GridHelper(100, 10, 0xff0000, 0x000000);
helper.rotation.x = Math.PI / 2;
scene.add(helper);

// lights
const skylight = new THREE.HemisphereLight(0xffffff, 0xb97a20, 1);
scene.add(skylight);

const sunlight = new THREE.DirectionalLight(0xffffff, 3);
sunlight.position.set(10, 10, 5);
scene.add(sunlight);

//
//
//
//
// objects
//
//
//
//

// scene.add(
//   // new THREE.Mesh(makePartCubeGeometry([1, 1, 1, 1, 1, 0], 10, 20, 10).translate(0, -10, 0), brown),
//   new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 20, 4).translate(0, -10, 0), brown2),
// );
// // scene.add(new THREE.Mesh(makeConiferGeometry(6, 30, 60, 1.5), green1));
// // scene.add(new THREE.Mesh(makeConiferGeometry(6, 25, 20, 1.5).translate(0, 15, 0), green2));
// // scene.add(new THREE.Mesh(makeConiferGeometry(6, 20, 20, 1.5).translate(0, 30, 0), green2));
// const n = 5;
// const height = 40;
// const radius = 20;
// // const topExtra =
// for (const i of range(n)) {
//   const mat = greens[i % greens.length]!;
//   const ratio = 0.85 ** i;
//   let h = height * ratio - i * (height / n / 6);
//   const bottom = height - h;
//   h *= 0.95 ** (n - 1 - i);
//   const r = radius * ratio ** 0.7;
//   scene.add(
//     new THREE.Mesh(new THREE.ConeGeometry(r, h, 4, 1, true).translate(0, h / 2 + bottom, 0), mat),
//   );
// }

scene.add(trees.createDeadBroadLeafTree());
scene.children.at(-1)!.translateY(-20);
scene.children.at(-1)!.rotateY(Math.PI);

//
//
//
//
// objects
//
//
//
//

requestAnimationFrame(animate);
render();
console.log('triangles', renderer.info.render.triangles);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function render() {
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  render();
}

function* range(x: number) {
  for (let i = 0; i < x; i += 1) {
    yield i;
  }
}

export function makeHalfCubeGeometry(
  hasLeftSide: boolean,
  w = 1,
  h = 1,
  d = 1,
): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();

  // points:
  //   4 -- 5
  //  /|    |
  // 7 |  6 |
  // | 0 -- 1
  // |/    /
  // 3 -- 2
  const p = [
    new THREE.Vector3(-1, 1, 1),
    new THREE.Vector3(1, 1, 1),
    new THREE.Vector3(1, -1, 1),
    new THREE.Vector3(-1, -1, 1),
    new THREE.Vector3(-1, 1, -1),
    new THREE.Vector3(1, 1, -1),
    new THREE.Vector3(1, -1, -1),
    new THREE.Vector3(-1, -1, -1),
  ] as const;

  // prettier-ignore
  const faces = [
    p[0],p[2],p[1], p[0],p[3],p[2],  // front
    ...(hasLeftSide
      ?  [ p[0],p[4],p[7], p[0],p[7],p[3] ]  // left
      :  [ p[1],p[2],p[6], p[1],p[6],p[5] ]  // right
    ),
    p[0],p[1],p[5], p[0],p[5],p[4], // top
  ]

  geometry.setFromPoints(faces);

  // the geometry starts as a 2x2x2 cube
  geometry.scale(w / 2, h / 2, d / 2);

  return geometry;
}

export function makePartCubeGeometry(
  sides: [front: number, left: number, back: number, right: number, top: number, bottom: number],
  w = 1,
  h = 1,
  d = 1,
): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();

  // points:
  //   4 -- 5
  //  /|    |
  // 7 |  6 |
  // | 0 -- 1
  // |/    /
  // 3 -- 2
  const p = [
    new THREE.Vector3(-1, 1, 1),
    new THREE.Vector3(1, 1, 1),
    new THREE.Vector3(1, -1, 1),
    new THREE.Vector3(-1, -1, 1),
    new THREE.Vector3(-1, 1, -1),
    new THREE.Vector3(1, 1, -1),
    new THREE.Vector3(1, -1, -1),
    new THREE.Vector3(-1, -1, -1),
  ] as const;

  const faces = [];
  // sides: [front, left, back, right, top, bottom]
  if (sides[0]) faces.push(p[0], p[2], p[1], p[0], p[3], p[2]); // front
  if (sides[1]) faces.push(p[0], p[4], p[7], p[0], p[7], p[3]); // left
  if (sides[2]) faces.push(p[7], p[4], p[5], p[7], p[5], p[6]); // back
  if (sides[3]) faces.push(p[1], p[2], p[6], p[1], p[6], p[5]); // right
  if (sides[4]) faces.push(p[0], p[1], p[5], p[0], p[5], p[4]); // top
  if (sides[5]) faces.push(p[2], p[3], p[6], p[3], p[7], p[6]); // bottom

  geometry.setFromPoints(faces);

  // the geometry starts as a 2x2x2 cube
  geometry.scale(w / 2, h / 2, d / 2);

  return geometry;
}

export function makeConiferGeometry(sides = 5, r = 1, h = 1, indent = 2): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();

  const indexes = [...range(sides)];
  const tips = indexes.map((i) => {
    const a = ((Math.PI * 2) / sides) * i;
    return new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
  });
  const troughs = indexes.map((i) => {
    const a = ((Math.PI * 2) / sides) * (i + 0.5);
    return new THREE.Vector3(Math.cos(a), 0, Math.sin(a)).multiplyScalar(1 / indent);
  });

  const top = new THREE.Vector3(0, 1, 0);

  const faces = [];
  for (const i of indexes) {
    faces.push(tips[i]!, top, troughs[i]!);
    faces.push(troughs[i]!, top, tips[(i + 1) % sides]!);
  }

  geometry.setFromPoints(faces);
  geometry.scale(r, h, r);
  return geometry;
}

export function makeRotTriangleGeometry(n = 5, r = 1, h = 1): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();

  const indexes = [...range(n)];
  const tips = indexes.map((i) => {
    const a = ((Math.PI * 2) / n) * i;
    return new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
  });

  const top = new THREE.Vector3(0, 1, 0);
  const bottom = new THREE.Vector3(0, 0, 0);

  const faces = [];
  for (const i of indexes) {
    faces.push(tips[i]!, top, tips[(i + 1) % n]!);
    faces.push(tips[i]!, tips[(i + 1) % n]!, bottom);
  }

  geometry.setFromPoints(faces);
  geometry.scale(r, h, r);
  return geometry;
}

export function createBroadLeafTree() {
  // const material = new THREE.MeshLambertMaterial({ color: 0xccac90, flatShading: true });
  const material = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: false });
  const tl = new THREE.TextureLoader();
  material.map = tl.load('/assets/earthmap1k.jpg');
  const retval =
    Math.random() > 0.5
      ? new THREE.Mesh(new THREE.SphereGeometry(10, 20, 20), material).rotateY(Math.PI)
      : new THREE.Mesh(new THREE.IcosahedronGeometry(10, 3), material);
  // new THREE.Mesh(new THREE.OctahedronGeometry(10, 5), material);
  return retval;
}
