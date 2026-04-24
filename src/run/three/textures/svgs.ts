import * as THREE from 'three';

import explosion from '/assets/explosion.svg';

const loader = new THREE.TextureLoader();

export const svgTextures = {
  bulletDying: loader.load(explosion),
} as const;
