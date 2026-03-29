import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { timer } from '../run/three/main';
import { Legs } from './legs';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();

function initScene() {
  scene.background = new THREE.Color(0xaaccee);

  const centerY = 60;
  camera.position.set(0, centerY + 20, -200);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target = new THREE.Vector3(40, centerY, 0);
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

let players: Legs[];

function initBones() {
  const material = new THREE.MeshLambertMaterial({
    color: 0xccccdd,
    emissive: 0x476584,
    side: THREE.DoubleSide,
    flatShading: true,
  });

  players = [
    new Legs({ length: 40, radius: 6 }, 25, material),
    new Legs({ length: 40, radius: 6 }, 25, material),
    new Legs({ length: 40, radius: 6 }, 25, material),
    new Legs({ length: 40, radius: 6 }, 25, material),
  ];

  for (let i = 0; i < players.length; i += 1) {
    const legs = players[i]!;
    scene.add(legs.object);
    legs.object.position.x += i * 30;
  }
}

function render(ms?: number) {
  requestAnimationFrame(render);

  timer.update(ms);
  for (const legs of players) {
    legs.update(timer.getDelta());
  }
  renderer.render(scene, camera);
}

let moving = false;

document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    moving = !moving;
    for (const legs of players) {
      if (moving) legs.startWalking();
      else legs.stopWalking();
    }
  }
});

initScene();
render();
console.log('triangles', renderer.info.render.triangles);
