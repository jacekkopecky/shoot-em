import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

import * as dim from '#dimensions';

export let camera: THREE.PerspectiveCamera;
let cameraTween: TWEEN.Tween<THREE.Vector3>;
let cameraTimer = new THREE.Timer();

export function initCamera(canvas: HTMLCanvasElement) {
  camera = new THREE.PerspectiveCamera(
    dim.cameraFoV,
    canvas.clientWidth / canvas.clientHeight,
    1,
    dim.cameraToTrackEndLength,
  );
  camera.position.copy(dim.cameraPosition);
  camera.lookAt(dim.cameraTarget);

  cameraTween = new TWEEN.Tween(camera.position);
  cameraTween.onUpdate(() => {
    camera.lookAt(dim.cameraTarget);
  });

  (window as any).gameCamera = camera;
  (window as any).gameCameraTween = cameraTween;
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

export function updateCameraPosition(x: number, smoothEnd?: boolean, smoothStart?: boolean) {
  const targetX = x * 0.7;

  // longer duration if both parts should be smooth
  const duration =
    smoothEnd && smoothStart ? dim.cameraLongMoveDurationSec : dim.cameraTweenDurationSec;

  const easing = selectEasing(smoothEnd, smoothStart);
  cameraTween.stop();
  if (easing) {
    cameraTween.to({ x: targetX }, duration).easing(easing).start(cameraTimer.getElapsed(), true);
  } else {
    camera.position.x = targetX;
    camera.lookAt(dim.cameraTarget);
  }
}

export function moveCamera() {
  cameraTimer.update();
  cameraTween.update(cameraTimer.getElapsed());
}

function selectEasing(smoothEnd?: boolean, smoothStart?: boolean) {
  switch (true) {
    case smoothEnd && smoothStart:
      return TWEEN.Easing.Sinusoidal.InOut;
    case smoothEnd:
      return TWEEN.Easing.Sinusoidal.Out;
    case smoothStart:
      return TWEEN.Easing.Sinusoidal.In;
    default:
      return undefined;
  }
}
