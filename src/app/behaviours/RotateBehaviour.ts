import {Behaviour} from "./Behaviour";
import {Actor} from "../model/Actor";
import {Vector2d} from "../geometry/Vector2d";
export class RotateBehaviour implements Behaviour {
  private changeInterval: number;
  private weight: number;
  private direction: Vector2d;
  private tick: number;

  constructor(weight: number, changeInterval: number) {
    this.weight = weight;
    this.changeInterval = changeInterval;
  }

  update(actor: Actor) {
    if (this.tick == 0) {
      this.direction = Actor.getRandomDirection();
    }
    this.tick++;
    this.tick %= this.changeInterval;
    actor.direction = actor.direction.add(this.direction.scalar(this.weight));
  }

  getActor(): Actor {
    return null;
  }

}
