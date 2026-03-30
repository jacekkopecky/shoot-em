import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { timer } from '../run/three/main';
import { Marvin } from './marvin';
import { logFps } from '#log';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
const scene = new THREE.Scene();

(window as any).THREE = THREE;

const playerSize = {
  legLength: 40,
  legRadius: 4.24,
  hipWidth: 25,
};
const playerN = 144;
const playerDistance = 50;

function initScene() {
  scene.background = new THREE.Color(0xaaccee);

  const centerY = 60;
  camera.position.set(0, centerY + 20, 60 + 40 * Math.sqrt(playerN));

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.zoomToCursor = true;
  controls.target = new THREE.Vector3(0, centerY, 0);
  controls.rotateLeft((Math.PI / 180) * 225);
  controls.update();

  // lights
  const skylight = new THREE.HemisphereLight(0xffffff, 0xb97a20, 2);
  scene.add(skylight);

  const sunlight = new THREE.DirectionalLight(0xffffff, 3);
  sunlight.position.set(10, 10, -5);
  scene.add(sunlight);

  window.addEventListener(
    'resize',
    function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    },
    false,
  );

  initBones();
}

let players: Marvin[] = [];

function initBones() {
  const material = new THREE.MeshLambertMaterial({
    color: 0xccccdd,
    emissive: 0x476584,
    flatShading: true,
  });

  const gunMaterial = new THREE.MeshLambertMaterial({
    color: 0x555555,
    flatShading: true,
  });

  const positions = enumeratePositions();
  for (let i = 0; i < playerN; i += 1) {
    const player = new Marvin(playerSize, material, gunMaterial);
    players.push(player);
    scene.add(player.object);
    const pos = positions.next().value!;
    player.object.position.x += pos[0] * playerDistance;
    player.object.position.z += pos[1] * playerDistance;
  }
}

function* enumeratePositions(): Generator<[number, number], null, void> {
  let minX = 0;
  let minY = 0;
  let maxX = 0;
  let maxY = 0;

  let x = 0;
  let y = 0;

  yield [0, 0];

  while (true) {
    // go up
    while (x <= maxX) yield [++x, y];
    maxX = x;
    while (y <= maxY) yield [x, ++y];
    maxY = y;
    while (x >= minX) yield [--x, y];
    minX = x;
    while (y >= minY) yield [x, --y];
    minY = y;
  }
}

function render(ms?: number) {
  requestAnimationFrame(render);

  timer.update(ms);
  for (const player of players) {
    player.update(timer.getDelta());
  }
  renderer.render(scene, camera);

  logFps(ms);
}

let moving = true;

document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    moving = !moving;
    for (const player of players) {
      if (moving) player.startWalking();
      else player.stopWalking();
    }
  }
});

initScene();
render();
for (const player of players) {
  if (moving) player.startWalking();
  else player.stopWalking();
}
console.log('triangles', renderer.info.render.triangles);
