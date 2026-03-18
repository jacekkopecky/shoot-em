import * as THREE from 'three';

import { createTrack, createTrackDecorations, moveTrackDecorations } from './models/track';

const trackDecorationsGroup = new THREE.Group();

export function setupTrack() {
  const track = createTrack();

  createTrackDecorations(trackDecorationsGroup);
  track.add(trackDecorationsGroup);

  return track;
}

export function moveTrack(delta: number) {
  moveTrackDecorations(trackDecorationsGroup, delta);
}
