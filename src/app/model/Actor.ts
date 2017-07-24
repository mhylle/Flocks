import {Vector2d} from "../geometry/Vector2d";
import {Behaviour} from "../behaviours/Behaviour";

export class Actor {
  name: string;
  position: Vector2d;
  direction: Vector2d;
  degToRad: number = Math.PI / 180;
  speed: number;
  posX: string;
  posY: string;
  rotation: string;
  behaviours: Behaviour[] = [];
  image: string;

  debugMsg: string;

  private scaledDirection: Vector2d;

  static getRandomDirection(): Vector2d {
    let rotation = Math.random() * Math.PI / 180;
    let vector2d = new Vector2d();
    vector2d.x = Math.cos(rotation);
    vector2d.y = Math.sin(rotation);
    vector2d.normalize();
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
    this.direction.normalize();
    this.scaledDirection = this.direction.scalar(this.speed);
    this.position = this.position.add(this.scaledDirection);
    this.posX = Math.floor(this.position.x) + 'px';
    this.posY = Math.floor(this.position.y) + 'px';

    let upVector = new Vector2d();
    upVector.x = 0;
    upVector.y = 1;
    let cosV = this.direction.dot(upVector) / (upVector.length() * this.direction.length());
    let rot = Math.acos(cosV) / this.degToRad;

    for (let i = 0; i < this.behaviours.length; i++) {
      let behaviour = this.behaviours[i];
      behaviour.update(this);
    }

    this.rotation = "rotate(" + rot + "deg)";
    // console.log(this.name + " position: (" + this.position.x + ", " + this.position.y + ")");
  }
}
