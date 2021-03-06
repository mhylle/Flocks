import {Vector2d} from "../geometry/Vector2d";
import {Behaviour} from "../behaviours/Behaviour";

export class Actor {
  name: string;
  position: Vector2d;
  direction: Vector2d;
  width: string;
  height: string;
  degToRad: number = Math.PI / 180;
  speed: number;
  posX: string;
  posY: string;
  rotation: string;
  behaviours: Behaviour[] = [];
  image: string;

  debugMsg: string;

  scaledDirection: Vector2d;

  constructor() {
    this.position = new Vector2d();
    this.direction = Actor.getRandomDirection();
  }

  static getRandomDirection(): Vector2d {
    let rotation = Math.random();
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
    let upVector = new Vector2d();
    upVector.x = 0;
    upVector.y = 1;
    let cosV = this.direction.dot(upVector) / (upVector.length() * this.direction.length());
    let rot = Math.acos(cosV) / this.degToRad;
    this.rotation = "rotate(" + rot + "deg)";

    this.direction.normalize();
    this.scaledDirection = this.direction.scalar(this.speed);
    this.position = this.position.add(this.scaledDirection);

    this.posX = Math.floor(this.position.x) + 'px';
    this.posY = Math.floor(this.position.y) + 'px';

    for (let i = 0; i < this.behaviours.length; i++) {
      let behaviour = this.behaviours[i];
      behaviour.update(this);
    }


  }
}
