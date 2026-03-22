import * as THREE from 'three';

import * as dim from '#dimensions';

export let renderer: THREE.WebGLRenderer;
export let camera: THREE.PerspectiveCamera;
export const scene = new THREE.Scene();

(window as any).gameScene = scene;

export const timer = new THREE.Timer();
timer.connect(document);

export function init(main: HTMLElement) {
  const canvas = main.querySelector('canvas');
  if (!canvas) {
    throw new Error('cannot work without a canvas');
  }

  renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  camera = new THREE.PerspectiveCamera(
    dim.cameraFoV,
    canvas.clientWidth / canvas.clientHeight,
    1,
    dim.cameraToTrackEndLength,
  );
  camera.position.set(...dim.cameraPosition);
  camera.lookAt(...dim.cameraTarget);

  (window as any).gameCamera = camera;

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

/**
 * return world coordinates at depth `d` from the camera, at [xFraction,yfraction] on the screen,
 * with [xFraction,yFraction]=[0,0] being the bottom left corner, and [1,0] is bottom right corner
 */
export function getScreenCoordinates(d: number, xFraction: number, yFraction: number) {
  // get camera-local screen coordinates
  const localBottomLeft = new THREE.Vector2();
  const localTopRight = new THREE.Vector2();
  camera.getViewBounds(d, localBottomLeft, localTopRight);

  const x = localBottomLeft.x + xFraction * (localTopRight.x - localBottomLeft.x);
  const y = localBottomLeft.y + yFraction * (localTopRight.y - localBottomLeft.y);

  // z is negative d because that's where the camera is looking
  const localPoint = new THREE.Vector3(x, y, -d);
  return camera.localToWorld(localPoint);
}
