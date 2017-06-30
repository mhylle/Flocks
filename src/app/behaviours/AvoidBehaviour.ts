import {Behaviour} from "./Behaviour";
import {Actor} from "../model/Actor";
export class AvoidBehaviour implements Behaviour {
  private target: Actor;
  private distance: number;
  private weight: number;

  constructor(weight: number, target: Actor, distance: number) {
    this.weight = weight;
    this.target = target;
    this.distance = distance;
  }

  update(actor: Actor) {
    let targetDirection = actor.position.subtract(this.target.position);
    if (targetDirection.length() < this.distance) {
      targetDirection.normalize();
      actor.direction = actor.direction.add(targetDirection.scalar(this.weight));
    }
  }

  getActor(): Actor {
    return this.target;
  }

}
