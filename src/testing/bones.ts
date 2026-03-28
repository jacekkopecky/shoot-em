import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { timer } from '../run/three/main';
import { Legs } from './legs';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
const scene = new THREE.Scene();

function initScene() {
  scene.background = new THREE.Color(0xaaccee);

  camera.position.z = 50;
  camera.position.y = 20;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target = new THREE.Vector3(0, 20, 0);
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
    color: 0xccac90,
    emissive: 0x476584,
    side: THREE.DoubleSide,
    flatShading: true,
  });

  legs = new Legs({ length: 40, radius: 6 }, 25, material);

  scene.add(legs.object);

  const length = 12,
    width = 25;
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, -length / 2);
  shape.lineTo(-width / 2, length / 2);
  shape.lineTo(width / 2, length / 2);
  shape.lineTo(width / 2, -length / 2);
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 30,
    bevelSize: 4,
    bevelEnabled: true,
    bevelOffset: -4,
    bevelSegments: 1,
    bevelThickness: 3,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 40;
  scene.add(mesh);
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
