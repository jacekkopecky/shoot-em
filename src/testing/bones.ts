import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { timer } from '../run/three/main';
import { Marvin } from './marvin';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();

const playerSize = {
  length: 40,
  radius: 6,
  hipWidth: 25,
};
const playerN = 1;
const playerDistance = 30;

function initScene() {
  scene.background = new THREE.Color(0xaaccee);

  const centerY = 60;
  camera.position.set(0, centerY + 20, -60 - 40 * playerN);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target = new THREE.Vector3(0, centerY, 0);
  controls.rotateLeft((Math.PI / 180) * 225);
  controls.update();

  // lights
  const skylight = new THREE.HemisphereLight(0xffffff, 0xb97a20, 2);
  scene.add(skylight);

  const sunlight = new THREE.DirectionalLight(0xffffff, 3);
  sunlight.position.set(-10, 10, 5);
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
    side: THREE.DoubleSide,
    flatShading: true,
  });

  for (let i = 0; i < playerN; i += 1) {
    const player = new Marvin(playerSize, material);
    players.push(player);
    scene.add(player.object);
    player.object.position.x += i * playerDistance - ((playerN - 1) / 2) * playerDistance;
  }
}

function render(ms?: number) {
  requestAnimationFrame(render);

  timer.update(ms);
  for (const player of players) {
    player.update(timer.getDelta());
  }
  renderer.render(scene, camera);
}

let moving = false;

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
console.log('triangles', renderer.info.render.triangles);
