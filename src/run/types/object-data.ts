import * as THREE from 'three';

import type { Currency } from '#types';

import { Circle } from './circle';

interface AnyObjectData {
  extent2d: THREE.Box2 | Circle;
}

export interface PlayerData extends AnyObjectData {
  type: 'player';
  shotTime: number;
  remainingShotTime: number;
  range: number;
  bulletHitPoints: number;
  hitPoints: number;
}

export interface BulletData extends AnyObjectData {
  type: 'bullet';
  minZ: number;
  hitPoints: number;
}

export interface ObjectData extends AnyObjectData {
  type: 'object';
  hitPoints: number;
  // collectible objects can be collected by walking over them, not by shooting them
  collectible?: boolean;
  // benign objects just disappear when walking through with no harm to the player
  benign?: boolean;
  // awards can come when shot (non-collectible) or when walked over (collectible)
  award?: Currency;
  // whether this object should be used for the award animation
  useForAward?: boolean;
}

export function getPlayerData(obj: THREE.Object3D): PlayerData {
  return getUserData(obj, 'player');
}

export function getBulletData(obj: THREE.Object3D): BulletData {
  return getUserData(obj, 'bullet');
}

export function getObjectData(obj: THREE.Object3D): ObjectData {
  return getUserData(obj, 'object');
}

function getUserData(obj: THREE.Object3D, type: string): any {
  const userData = obj.userData;
  if (userData.type === type) {
    return userData;
  } else {
    throw new TypeError(`expecting object type ${type}, got "${userData.type}"`);
  }
}
