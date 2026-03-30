import * as THREE from 'three';

export interface BonyTubeSizeOptions {
  length: number;
  radius: number;
  radius2?: number;
  segmentsPerBone: number;
  sides: number;
  boneCount: number;
  boneOffset?: number;
  openEnded?: boolean;
}

// adapted from https://threejs.org/docs/scenes/bones-browser.html

const _vector = new THREE.Vector3();
export function createBonyTubeGeometry(opts: BonyTubeSizeOptions) {
  const size: Required<BonyTubeSizeOptions> = {
    openEnded: false,
    boneOffset: 0,
    ...opts,
    radius2: opts.radius2 ?? opts.radius,
  };

  const geometry = new THREE.CylinderGeometry(
    size.radius,
    size.radius2,
    size.length,
    size.sides,
    size.segmentsPerBone * (size.boneCount - 1),
    size.openEnded,
  )
    .translate(0, size.length / 2, 0)
    .rotateY(Math.PI / size.sides);

  const segmentLength = size.length / (size.boneCount - 1);

  const skinIndices = [];
  const skinWeights = [];

  const position = geometry.attributes.position!;
  for (let i = 0; i < position.count; i++) {
    const y = _vector.fromBufferAttribute(position, i).y;

    const boneIndex = Math.floor(y / segmentLength);
    const topWeight = (y - boneIndex * segmentLength) / segmentLength;

    skinIndices.push(size.boneOffset + boneIndex, size.boneOffset + boneIndex + 1, 0, 0);
    skinWeights.push(1 - topWeight, topWeight, 0, 0);
  }

  geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

  return geometry;
}
