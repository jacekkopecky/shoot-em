import * as THREE from 'three';

const mixers = new Map<THREE.AnimationMixer, () => void>();

export function updateAnimations(delta: number) {
  for (const mixer of mixers.keys()) {
    mixer.update(delta);
  }
}

export function disposeAnimations() {
  for (const deallocate of Array.from(mixers.values())) {
    deallocate();
  }
}

export function shrinkToGone(obj: THREE.Object3D, duration: number) {
  const clip = new THREE.AnimationClip('shrink', duration, [
    new THREE.KeyframeTrack('.scale', [0, duration], [...obj.scale, 0, 0, 0]),
  ]);

  addClipAction(obj, duration, clip, true);
}

export function pulseAndShrinkToGone(obj: THREE.Object3D, duration: number) {
  const smaller = obj.scale.clone().multiplyScalar(0.8);

  const clip = new THREE.AnimationClip('pulseAndShrink', duration, [
    new THREE.KeyframeTrack(
      '.scale',
      [0, duration * 0.1, duration * 0.3, duration * 0.6, duration],
      [0, 0, 0, ...obj.scale, ...smaller, ...obj.scale, 0, 0, 0],
      THREE.InterpolateSmooth,
    ),
  ]);

  addClipAction(obj, duration, clip);
}

export function flyToTargetAndShrink(obj: THREE.Object3D, target: THREE.Vector3, duration: number) {
  const durations = betweener(0, duration);
  const x = betweener(obj.position.x, target.x);

  const clip = new THREE.AnimationClip('flyAndShrink', duration, [
    new THREE.KeyframeTrack(
      '.position[x]',
      durations(0, 0.5, 0.7, 1),
      x(0, 0.6, 0.9, 1),
      THREE.InterpolateSmooth,
    ),
    new THREE.KeyframeTrack(
      '.position[y]',
      [0, duration],
      [obj.position.y, target.y],
      THREE.InterpolateSmooth,
    ),
    new THREE.KeyframeTrack(
      '.position[z]',
      [0, duration],
      [obj.position.z, target.z],
      THREE.InterpolateSmooth,
    ),
    new THREE.KeyframeTrack('.scale', durations(0, 0.5, 1), [...obj.scale, ...obj.scale, 0, 0, 0]),
  ]);

  addClipAction(obj, duration, clip);
}

/**
 * A helper function that given two numbers, returns a function that turns fractions into linear
 * interpolations between the two numbers.
 *
 * Example:
 * const betweenX = betweener(2, 8);
 * betweenX(0, 0.5, 1) -> [2, 5, 8]
 * betweenX(0.8) -> [6.8] // 80% between 2 and 8
 */
function betweener(a: number, b: number): (...fractions: number[]) => number[] {
  return (...fractions) => fractions.map((f) => a + (b - a) * f);
}

function addClipAction(
  obj: THREE.Object3D,
  duration: number,
  clip: THREE.AnimationClip,
  fade = false,
) {
  const mixer = new THREE.AnimationMixer(obj);
  const action = mixer.clipAction(clip);
  action.loop = THREE.LoopOnce;
  action.play();
  // this gives the linear animation a smooth start
  if (fade) action.fadeIn(duration);

  function deallocate() {
    action.stop();
    mixer.uncacheAction(clip);
    mixer.uncacheClip(clip);
    mixer.uncacheRoot(obj);

    mixers.delete(mixer);
  }

  mixers.set(mixer, deallocate);
  mixer.addEventListener('finished', () => {
    deallocate();
    obj.removeFromParent();
  });
}
