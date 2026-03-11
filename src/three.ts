import * as THREE from 'three';

import { cameraPosition, cameraToTrackEndLength, cameraTarget, cameraFoV } from './dimensions.js';

export let renderer: THREE.WebGLRenderer;
export let camera: THREE.PerspectiveCamera;
export let scene = new THREE.Scene();

export const timer = new THREE.Timer();
timer.connect(document);

export function init(main: HTMLElement) {
  const canvas = main.querySelector('canvas');
  if (!canvas) {
    throw new Error('cannot work without a canvas');
  }

  renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  console.log(renderer);

  camera = new THREE.PerspectiveCamera(
    cameraFoV,
    canvas.clientWidth / canvas.clientHeight,
    1,
    cameraToTrackEndLength,
  );
  camera.position.set(...cameraPosition);
  camera.lookAt(...cameraTarget);

  onWindowResize();

  window.addEventListener('resize', onWindowResize);

  function onWindowResize() {
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(main.clientWidth, main.clientHeight);

    camera.aspect = main.clientWidth / main.clientHeight;
    camera.updateProjectionMatrix();

    render();
  }

  return () => {
    window.removeEventListener('resize', onWindowResize);
  };
}

export function render() {
  if (!scene) {
    console.warn('render called before setting the scene');
    return;
  }
  renderer.render(scene, camera);
}

export function dispose(group: THREE.Object3D) {
  group.traverse(function (obj) {
    if (hasDisposables(obj)) {
      obj.geometry.dispose();
      // not disposing materials, they are reused
      // for (const mat of Array.isArray(obj.material) ? obj.material : [obj.material]) {
      //   mat.dispose();
      // }
    }
  });
}

function hasDisposables(obj: unknown): obj is Pick<THREE.Mesh, 'geometry' | 'material'> {
  return (
    obj != null &&
    typeof obj === 'object' &&
    ((obj as THREE.Mesh).isMesh || (obj as THREE.Line).isLine)
  );
}

export function getObjectZ(obj: THREE.Object3D) {
  return (obj.parent?.position?.z ?? 0) + obj.position.z;
}

export function getObjectX(obj: THREE.Object3D) {
  return (obj.parent?.position?.x ?? 0) + obj.position.x;
}

export function isSprite(obj?: THREE.Object3D): obj is THREE.Sprite {
  return Boolean(obj && 'isSprite' in obj && obj.isSprite);
}
