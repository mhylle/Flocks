import {Injectable} from '@angular/core';
import {Base} from "../model/Base";
import {Tower} from "../model/Tower";
import {Vector2d} from "../geometry/Vector2d";

@Injectable()
export class BaseService {
  base: Base = new Base();
  constructor() {
    this.buildBase();
  }

  private buildBase() {

    this.base.height = 100;
    this.base.width = 300;
    this.base.name = "test base";
    // let block = new Block();
    // this.base.tiles.push(block);

    let tower1 = new Tower();
    tower1.name = "Archer tower";
    tower1.position = new Vector2d();
    tower1.position.x = 25;
    tower1.position.y = 20;
    tower1.posX = tower1.position.x + "px";
    tower1.posY = tower1.position.y + "px";
    this. base.tiles.push(tower1);
    let tower2 = new Tower();
    tower2.name = "Main tower";
    tower2.position = new Vector2d();
    tower2.position.x = 125;
    tower2.position.y = 20;
    tower2.posX = tower2.position.x + "px";
    tower2.posY = tower2.position.y + "px";
    this.base.tiles.push(tower2);
    let tower3 = new Tower();
    tower3.name = "Archer tower";
    tower3.position = new Vector2d();
    tower3.position.x = 225;
    tower3.position.y = 20;
    tower3.posX = tower3.position.x + "px";
    tower3.posY = tower3.position.y + "px";
    this.base.tiles.push(tower3);
  }

  getBase(): Base {
    return this.base;
  }
}
