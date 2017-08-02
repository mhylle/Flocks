import {Injectable} from '@angular/core';
import {Base} from "../model/Base";
import {Tower} from "../model/Tower";
import {Vector2d} from "../geometry/Vector2d";
import {Block} from "../model/Block";

@Injectable()
export class BaseService {
  base: Base;

  constructor() {
  }

  private buildBase() {
    this.base.height = 100;
    this.base.width = 300;
    this.base.name = "test base";
    this.buildTowers();
    this.buildBlocks();
  }

  private buildTowers() {
    let tower1 = new Tower();
    tower1.name = "Archer tower";
    tower1.position = new Vector2d();
    tower1.position.x = 25;
    tower1.position.y = 20;
    tower1.posX = tower1.position.x + "px";
    tower1.posY = tower1.position.y + "px";
    this.base.towers.push(tower1);
    let tower2 = new Tower();
    tower2.name = "Main tower";
    tower2.position = new Vector2d();
    tower2.position.x = 125;
    tower2.position.y = 20;
    tower2.posX = tower2.position.x + "px";
    tower2.posY = tower2.position.y + "px";
    this.base.towers.push(tower2);
    let tower3 = new Tower();
    tower3.name = "Archer tower";
    tower3.position = new Vector2d();
    tower3.position.x = 225;
    tower3.position.y = 20;
    tower3.posX = tower3.position.x + "px";
    tower3.posY = tower3.position.y + "px";
    this.base.towers.push(tower3);
  }

  getBase(): Base {
    if (this.base == null) {
      this.base = new Base();
      this.buildBase();
    }
    return this.base;
  }

  private buildBlocks() {
    this.createBlock(0,0);
    this.createBlock(0,25);
    this.createBlock(0,50);
    this.createBlock(0,75);
    this.createBlock(0,100);
    this.createBlock(0,125);
    this.createBlock(0,150);
    this.createBlock(0,175);
    this.createBlock(0,200);
    this.createBlock(0,225);
    this.createBlock(0,250);
    this.createBlock(0,275);

    this.createBlock(275,0);
    this.createBlock(275,25);
    this.createBlock(275,50);
    this.createBlock(275,75);
    this.createBlock(275,100);
    this.createBlock(275,125);
    this.createBlock(275,150);
    this.createBlock(275,175);
    this.createBlock(275,200);
    this.createBlock(275,225);
    this.createBlock(275,250);
    this.createBlock(275,275);


    this.createBlock(25,137);
    this.createBlock(75,137);
    this.createBlock(100,137);

    this.createBlock(175,137);
    this.createBlock(200,137);

    this.createBlock(250,137);
    this.createBlock(275,137);
  }

  private createBlock(x: number, y: number) {
    let block = new Block();
    let pos = new Vector2d();
    pos.x = x;
    pos.y = y;
    block.position = pos;
    block.posX = block.position.x + "px";
    block.posY = block.position.y + "px";
    block.width = 25 + "px";
    block.height= 25 + "px";
    this.base.tiles.push(block);
    return block;
  }
}
