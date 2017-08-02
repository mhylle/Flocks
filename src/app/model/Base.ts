import {Tile} from "./Tile";
import {Actor} from "./Actor";

export class Base {
  name: string;

  width: number;
  height: number;

  tiles: Actor[] = [];
}
