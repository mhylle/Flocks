import {Injectable} from '@angular/core';
import {Unit} from "../model/Unit";

@Injectable()
export class EntityService {
  units: Unit[] = [];

  constructor() {
    this.createUnitData();
  }

  private createUnitData() {
    let u1 = new Unit();
    u1.name = "Tanky";
    u1.cost = 20;
    u1.size = 1;
    u1.hp = 120;
    u1.level = 1;
    u1.speed = 0.4;
    this.units.push(u1);
    let u2 = new Unit();
    u2.name = "DPSy";
    u2.cost = 25;
    u2.size = .5;
    u2.hp = 40;
    u2.level = 1;
    u2.speed = 0.8;
    this.units.push(u2);
    let u3 = new Unit();
    u3.name = "Spawnerony";
    u3.cost = 30;
    u3.size = .7;
    u3.hp = 30;
    u3.level = 1;
    u3.speed = 0.5;
    this.units.push(u3);
    let u4 = new Unit();
    u4.name = "Healy";
    u4.cost = 30;
    u4.size = .5;
    u4.hp = 20;
    u4.level = 1;
    u4.speed = 0.5;
    this.units.push(u4);
  }

  getUnits(): Unit[] {
    return this.units;
  }
}
