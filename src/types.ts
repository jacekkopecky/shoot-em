import * as THREE from 'three';

import { sprites } from './three-materials';

export const CURRENCIES = ['coin', 'gem'] as const;
export type CurrencyType = (typeof CURRENCIES)[number];

export interface Currency {
  type: CurrencyType;
  amount: number;
}

interface AnyObjectData {
  width: number;
  depth: number;
}

export interface PlayerData extends AnyObjectData {
  type: 'player';
  shotTime: number;
  remainingShotTime: number;
  range: number;
  bulletLength: number;
  dying?: boolean;
  dyingMaterial: keyof typeof sprites;
  hitPoints: number;
}

export interface BulletData extends AnyObjectData {
  type: 'bullet';
  minZ: number;
  length: number;
  dying?: boolean;
  dyingMaterial: keyof typeof sprites;
  hitPoints: number;
}

export interface ObjectData extends AnyObjectData {
  type: 'object';
  dying?: boolean;
  dyingMaterial: keyof typeof sprites;
  hitPoints: number;
  // collectible objects can be collected by walking over them, not by shooting them
  collectible?: boolean;
  // benign objects just disappear when walking through with no harm to the player
  benign?: boolean;
  // awards can come when shot (non-collectible) or when walked over (collectible)
  award?: Currency;
}

export interface PlayerGroupData extends AnyObjectData {
  type: 'playersGroup';
}

export function getPlayerGroupData(obj: THREE.Object3D): PlayerGroupData {
  return getUserData(obj, 'playersGroup');
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
