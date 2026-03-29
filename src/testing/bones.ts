import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { timer } from '../run/three/main';
import { Legs } from './legs';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
const scene = new THREE.Scene();

function initScene() {
  scene.background = new THREE.Color(0xaaccee);

  const centerY = 60;
  camera.position.set(50, centerY + 20, 70);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target = new THREE.Vector3(0, centerY, 0);
  controls.rotateLeft(Math.PI / 2);
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

let legs: Legs;

function initBones() {
  const material = new THREE.MeshLambertMaterial({
    color: 0xccccdd,
    emissive: 0x476584,
    side: THREE.DoubleSide,
    flatShading: true,
  });

  legs = new Legs({ length: 40, radius: 6 }, 25, material);

  scene.add(legs.object);
}

function render(ms?: number) {
  requestAnimationFrame(render);

  timer.update(ms);
  legs.update(timer.getDelta());
  renderer.render(scene, camera);
}

let moving = false;

document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    moving = !moving;
    if (moving) legs.startWalking();
    else legs.stopWalking();
  }
});

initScene();
render();
console.log('triangles', renderer.info.render.triangles);
