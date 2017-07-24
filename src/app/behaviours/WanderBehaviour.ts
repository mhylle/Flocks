import {Behaviour} from "./Behaviour";
import {Actor} from "../model/Actor";
import {Vector2d} from "../geometry/Vector2d";
export class WanderBehaviour implements Behaviour {
  private changeInterval: number;
  private weight: number;
  private direction: Vector2d;
  private tick: number = 0;

  constructor(changeInterval: number, weight: number) {
    this.changeInterval = changeInterval;
    this.weight = weight;
  }

  update(actor: Actor) {
    if (this.tick == 0) {
      this.direction = Actor.getRandomDirection();
    }
    // actor.debugMsg = "" + this.tick;
    this.tick++;

    if (this.changeInterval == this.tick) {
      this.tick = 0;
    }

    let vector2d = this.direction.scalar(this.weight);
    actor.debugMsg ="" + vector2d.x + " , " + vector2d.y;
    actor.direction = actor.direction.add(vector2d);
  }

  getActor(): Actor {
    return null;
  }
}
