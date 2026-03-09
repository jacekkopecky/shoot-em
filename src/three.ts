import * as Three from 'three';

import { cameraPosition, cameraToTrackEndLength, cameraTarget, cameraFoV } from './dimensions.js';

export let renderer: Three.WebGLRenderer;
export let camera: Three.PerspectiveCamera;

export function setupThree(main: HTMLElement) {
  const canvas = main.querySelector('canvas');
  if (!canvas) {
    throw new Error('cannot work without a canvas');
  }

  renderer = new Three.WebGLRenderer({ antialias: true, canvas });

  camera = new Three.PerspectiveCamera(
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
  }

  return () => {
    window.removeEventListener('resize', onWindowResize);
  };
}

export function dispose(group: Three.Object3D) {
  group.traverse(function (obj) {
    if (hasDisposables(obj)) {
      obj.geometry.dispose();
      for (const mat of Array.isArray(obj.material) ? obj.material : [obj.material]) {
        mat.dispose();
      }
    }
  });
}

function hasDisposables(obj: unknown): obj is Pick<Three.Mesh, 'geometry' | 'material'> {
  return (
    obj != null &&
    typeof obj === 'object' &&
    ((obj as Three.Mesh).isMesh || (obj as Three.Line).isLine)
  );
}
