import {Vector2d} from "../geometry/Vector2d";
import {Behaviour} from "../behaviours/Behaviour";
export class Actor {
  name: string;
  position: Vector2d;
  direction: Vector2d;

  speed: number;
  posX: string;
  posY: string;
  rotation: string;
  behaviours: Behaviour[] = [];

  private scaledDirection : Vector2d;

  static getRandomDirection(): Vector2d {
    let rotation = Math.random() * 2 * Math.PI;
    let vector2d = new Vector2d();
    vector2d.x = Math.cos(rotation);
    vector2d.y = Math.sin(rotation);
    return vector2d;
  }

  static getRandomPosition(width: number, height: number) {
    let x = Math.random() * width;
    let y = Math.random() * height;
    let vector2d = new Vector2d();
    vector2d.x = x;
    vector2d.y = y;
    return vector2d;
  }

  addBehaviour(behaviour: Behaviour) {
    this.behaviours.push(behaviour);
  }

  update() {
    this.scaledDirection = this.direction.scalar(this.speed);
    this.direction.normalize();
    this.position = this.position.add(this.scaledDirection);
    this.posX = Math.floor(this.position.x) + 'px';
    this.posY = Math.floor(this.position.y) + 'px';
    for (let i = 0; i < this.behaviours.length; i++) {
      let behaviour = this.behaviours[i];
      behaviour.update(this);
    }
    let upVector = new Vector2d();
    upVector.x = 0;
    upVector.y = 1;
    let tmpRot = Math.acos(this.direction.dot(upVector) / (upVector.length() * this.direction.length()));
    this.rotation = "rotate("+tmpRot+"deg)";

    // console.log(this.name + " position: (" + this.position.x + ", " + this.position.y + ")");
  }
}
