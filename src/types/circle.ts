import { Vector2, Box2 } from 'three';

// adapted from THREE.JS Box2.js

const _vector = new Vector2();

/**
 * Represents a circle in 2D space.
 */
export class Circle {
  constructor(
    private center = new Vector2(0, 0),
    private radius = 0,
  ) {}

  getCenter(target: Vector2) {
    return target.copy(this.center);
  }

  getRadius() {
    return this.radius;
  }

  set(ctr: Vector2, r: number) {
    this.center.copy(ctr);
    this.radius = r;

    return this;
  }

  clone() {
    return new Circle().copy(this);
  }

  copy(circle: Circle) {
    this.center.copy(circle.center);
    this.radius = circle.radius;

    return this;
  }

  makeEmpty() {
    this.radius = 0;

    return this;
  }

  isEmpty() {
    return this.radius <= 0;
  }

  expandByScalar(scalar: number) {
    this.radius += scalar;
    return this;
  }

  containsPoint(point: Vector2) {
    return point.distanceTo(this.center) <= this.radius;
  }

  intersectsBox(box: Box2) {
    box.clampPoint(this.center, _vector);
    return this.containsPoint(_vector);
  }

  translate(offset: Vector2) {
    this.center.add(offset);
    return this;
  }
}
