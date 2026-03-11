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
  const mixer = new THREE.AnimationMixer(obj);
  const clip = new THREE.AnimationClip('shrink', duration, [
    new THREE.KeyframeTrack('.scale', [0, duration], [...obj.scale, 0, 0, 0]),
    new THREE.KeyframeTrack('.position[y]', [0, duration], [obj.position.y, 0]),
  ]);
  const action = mixer.clipAction(clip);
  action.loop = THREE.LoopOnce;
  action.play();
  // this gives the linear animation a smooth start
  action.fadeIn(duration);

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
