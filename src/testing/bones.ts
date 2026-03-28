import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { timer } from '../run/three/main';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
const scene = new THREE.Scene();

let mixer: THREE.AnimationMixer;
let mesh: THREE.SkinnedMesh;
let action: THREE.AnimationAction;

function initScene() {
  scene.background = new THREE.Color(0xaaccee);

  camera.position.z = 50;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  new OrbitControls(camera, renderer.domElement);

  let lights = [];
  lights[0] = new THREE.DirectionalLight(0xffffff, 3);
  lights[1] = new THREE.DirectionalLight(0xffffff, 3);
  lights[2] = new THREE.DirectionalLight(0xffffff, 3);

  lights[0].position.set(0, 200, 0);
  lights[1].position.set(100, 200, 100);
  lights[2].position.set(-100, -200, -100);

  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);

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

interface Sizing {
  segmentHeight: number;
  segmentCount: number;
  height: number;
  halfHeight: number;
  stepsPerSegment: number;
}

function initBones() {
  const segmentHeight = 40;
  const segmentCount = 1;

  const sizing = {
    segmentHeight,
    segmentCount,
    height: segmentHeight * segmentCount,
    halfHeight: segmentHeight * segmentCount * 0.5,
    stepsPerSegment: 5,
  };

  const geometry = createGeometry(sizing);
  const bones = createBones(sizing);
  mesh = createMesh(geometry, bones, sizing);

  mesh.scale.multiplyScalar(1);
  scene.add(mesh);

  bones[0]!.rotation.x = Math.PI;

  const duration = 1.2;
  const durations = betweener(0, duration);
  const footBone = bones.at(-1)!;
  const heights = betweener(footBone.position.y, footBone.position.y * 0.85);
  const lengths = betweener(footBone.position.x - 10, footBone.position.x + 10);

  const clip = new THREE.AnimationClip('walk', duration, [
    new THREE.KeyframeTrack(
      '.rotation[z]',
      durations(0, 0.15, 0.45, 0.75, 1),
      [0, 0, 0.7, 0, 0],
      THREE.InterpolateLinear,
    ),
    new THREE.KeyframeTrack(
      '.position[x]',
      durations(0, 0.25, 0.75, 1),
      lengths(0.5, 0, 1, 0.5),
      THREE.InterpolateLinear,
    ),
    new THREE.KeyframeTrack(
      '.position[y]',
      durations(0, 0.25, 0.4, 0.75, 1),
      heights(0, 0, 1, 0, 0),
      THREE.InterpolateLinear,
    ),
  ]);

  mixer = new THREE.AnimationMixer(footBone);
  action = mixer.clipAction(clip);
  action.loop = THREE.LoopRepeat;
}

function betweener(a: number, b: number): (...fractions: number[]) => number[] {
  return (...fractions) => fractions.map((f) => a + (b - a) * f);
}

function createGeometry(sizing: Sizing) {
  const geometry = new THREE.CylinderGeometry(
    5, // radiusTop
    5, // radiusBottom
    sizing.height, // height
    4, // radiusSegments
    sizing.segmentCount * sizing.stepsPerSegment, // heightSegments
    true, // openEnded
  );

  const position = geometry.attributes.position!;

  const vertex = new THREE.Vector3();

  const skinIndices = [];
  const skinWeights = [];

  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);

    const y = vertex.y + sizing.halfHeight;

    const skinIndex = Math.floor(y / sizing.segmentHeight);
    const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight;

    skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
    skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
  }

  geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

  return geometry;
}

function createBones(sizing: Sizing) {
  const bones = [];

  let prevBone = new THREE.Bone();
  bones.push(prevBone);
  prevBone.position.y = -sizing.halfHeight;

  for (let i = 0; i < sizing.segmentCount; i++) {
    const bone = new THREE.Bone();
    bone.position.x = 5;
    bone.position.y = sizing.segmentHeight;
    bones.push(bone);
    prevBone.add(bone);
    prevBone = bone;
  }

  return bones;
}

function createMesh(geometry: THREE.BufferGeometry, bones: THREE.Bone[], sizing: Sizing) {
  const material = new THREE.MeshLambertMaterial({
    color: 0xff0000,
    emissive: 0x476584,
    side: THREE.DoubleSide,
    flatShading: true,
  });

  const mesh = new THREE.SkinnedMesh(geometry, material);
  const skeleton = new THREE.Skeleton(bones);

  mesh.add(bones[0]!);

  mesh.bind(skeleton);

  const skeletonHelper = new THREE.SkeletonHelper(mesh);
  scene.add(skeletonHelper);

  mesh.position.y = sizing.height;
  return mesh;
}

let moving = false;
let reacted = true;

const isFrontLeg = false;

function render(ms?: number) {
  requestAnimationFrame(render);

  timer.update(ms);
  mixer.update(timer.getDelta());

  if (!reacted) {
    reacted = true;
    if (!moving) {
      action.fadeOut(0.5);
    } else {
      action.reset();
      if (isFrontLeg) action.time = action.getClip().duration / 2;
      action.fadeIn(action.getClip().duration / 2);
      action.enabled = true;
      action.play();
    }
  }

  renderer.render(scene, camera);
}

document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    moving = !moving;
    reacted = false;
  } else if (e.key === 'l') {
    console.log(action.time);
  }
});

initScene();
render();
console.log(renderer.info.render.triangles);
