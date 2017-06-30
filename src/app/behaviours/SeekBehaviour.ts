import {Behaviour} from "./Behaviour";
import {Actor} from "../model/Actor";
export class SeekBehaviour implements Behaviour {

  private target: Actor;
  private weight: number;

  constructor(weight: number, target: Actor) {
    this.weight = weight;
    this.target = target;
  }

  update(actor: Actor) {
    let targetDirection = this.target.position.subtract(actor.position);
    targetDirection.normalize();
    actor.direction = actor.direction.add(targetDirection.scalar(this.weight));
  }

  getActor(): Actor {
    return this.target;
  }

}
