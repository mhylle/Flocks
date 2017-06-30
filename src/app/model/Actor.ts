import {Vector2d} from "../geometry/Vector2d";
export class Actor {
  position: Vector2d;
  direction: Vector2d;

  speed: number;

  static getRandomDirection(): Vector2d {
    let rotation = Math.random() * 2 * Math.PI;
    let vector2d = new Vector2d();
    vector2d.x = Math.cos(rotation);
    vector2d.x = Math.sin(rotation);
    return vector2d;
  }
}
