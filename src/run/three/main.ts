import * as THREE from 'three';

import * as dim from '#dimensions';

import { camera, initCamera } from './camera';

export let renderer: THREE.WebGLRenderer;
export const scene = new THREE.Scene();

export function init(main: HTMLElement) {
  const canvas = main.querySelector('canvas');
  if (!canvas) {
    throw new Error('cannot work without a canvas');
  }

  renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.shadowMap.enabled = dim.shadowsEnabled;

  initCamera(canvas);

  (window as any).gameScene = scene;
  (window as any).gameRenderer = renderer;

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

export function render(showStats?: boolean) {
  if (!scene) {
    console.warn('render called before setting the scene');
    return;
  }
  renderer.render(scene, camera);
  if (showStats) {
    console.log('triangles', renderer.info.render.triangles);
  }
}
