export class Vector2d {
  x: number;
  y: number;

  constructor() {
    this.x = 50;
    this.y = 50;
  }

  normalize() {
    let length = this.length();
    if (length != 0) {
      this.x = this.x / length;
      this.y = this.y / length;
    }
  }

  subtract(vector2d: Vector2d): Vector2d {
    let result = new Vector2d();
    result.x = this.x - vector2d.x;
    result.y = this.y - vector2d.y;
    return result;
  }

  add(vector2d: Vector2d): Vector2d {
    let result = new Vector2d();
    result.x = this.x + vector2d.x;
    result.y = this.y + vector2d.y;
    return result;
  }

  scalar(scalar: number): Vector2d {
    let result = new Vector2d();
    result.x = scalar * this.x;
    result.y = scalar * this.y;
    return result;
  }

  length(): number {
    let x2 = Math.pow(this.x, 2);
    //noinspection JSSuspiciousNameCombination
    let y2 = Math.pow(this.y, 2);
    return Math.sqrt(x2 + y2);
  }

  dot(vector2d: Vector2d): number {
    return this.x * vector2d.x + this.y * vector2d.y;
  }

  rotateRadians(radians): Vector2d {
    let result = new Vector2d();
    let ca = Math.cos(radians);
    let sa = Math.sin(radians);
    result.x = ca * this.x - sa * this.y;
    result.y = sa * this.x - ca * this.y;
    return result;
  }
}
