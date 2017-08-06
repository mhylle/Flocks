import {Tile} from "./Tile";
import {Vector2d} from "../geometry/Vector2d";
import {Actor} from "./Actor";
import {Behaviour} from "../behaviours/Behaviour";

export class Tower implements Tile, Actor {
  width: string;
  height: string;
  direction: Vector2d;
  degToRad: number;
  speed: number;
  rotation: string;
  behaviours: Behaviour[];
  image: string;
  debugMsg: string;
  scaledDirection: Vector2d;

  addBehaviour(behaviour: Behaviour): any {
    return undefined;
  }

  update(): any {
    return undefined;
  }

  posX: string;
  posY: string;
  name: string;
  position: Vector2d;
  hp: number;
}
