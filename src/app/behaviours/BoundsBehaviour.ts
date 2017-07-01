import {Behaviour} from "./Behaviour";
import {Actor} from "../model/Actor";
export class BoundsBehaviour implements Behaviour {

  private minX: number;
  private maxX: number;
  private minY: number;
  private maxY: number;

  constructor(minX: number, maxX: number, minY: number, maxY: number) {
    this.minX = minX;
    this.maxX = maxX;
    this.minY = minY;
    this.maxY = maxY;
  }

  update(actor: Actor) {
    if (actor.position.x < this.minX) {
      actor.position.x = this.maxX;
    }
    if (actor.position.x > this.maxX) {
      actor.position.x = this.minX;
    }
    if (actor.position.y < this.minY) {
      actor.position.y = this.maxY;
    }
    if (actor.position.y > this.maxY) {
      actor.position.y = this.minY;
    }
  }

  getActor(): Actor {
    return null;
  }

}
