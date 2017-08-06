import {Path} from "./Path";
import {Level} from "../../model/Level";
import {Node} from "../../model/Node";

export class AStarPathFinder {
  private closed: Node[];
  private open: Node[];
  private level: Level;
  private maxSearchDistance: number;

  constructor(level: Level) {
    this.level = level;
  }
  public findPath(sx: number, sy: number, tx: number, ty: number) : Path {
    this.closed = [];
    this.open = [];


    let nodes = this.level.nodes;
    this.open.push(nodes[sx][sy]);
    nodes[tx][ty].parent = null;

    let maxDepth: number = 0;

    while((maxDepth < this.maxSearchDistance) && this.open.length != 0) {

    }
  }
}
