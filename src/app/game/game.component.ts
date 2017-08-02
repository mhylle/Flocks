import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Actor} from "../model/Actor";
import {BoundsBehaviour} from "../behaviours/BoundsBehaviour";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {EntityService} from "./entity.service";
import {Vector2d} from "../geometry/Vector2d";
import {BaseService} from "../base/base.service";
import {Base} from "../model/Base";
import {SeekBehaviour} from "../behaviours/SeekBehaviour";
import {AvoidBehaviour} from "../behaviours/AvoidBehaviour";

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [BaseService]
})
export class GameComponent implements OnInit, OnDestroy {
  units: number;
  actors: Actor[] = [];

  appWidth = 300;
  appHeight = 300;
  base: Base;

  private subscription: Subscription;
  private started: boolean = false;

  constructor(private entityService: EntityService, private baseService: BaseService) {

  }

  ngOnInit(): void {
    this.base = this.baseService.getBase();
  }

  update() {
    this.units = this.actors.length;
    for (let i = 0; i < this.actors.length; i++) {
      let actor = this.actors[i];
      actor.update();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  start() {
    if (this.started) {
      return;
    }
    this.started = true;
    let unitSelection = this.entityService.getUnitSelection();
    for (let i = 0; i < unitSelection.length; i++) {
      let unit = unitSelection[i];
      let actor = new Actor();
      actor.speed = unit.speed;
      actor.position.x = Math.random() * this.appWidth;
      actor.position.x < 25 ? actor.position.x = 25 : actor.position.x;
      actor.position.x > 275 ? actor.position.x = 275 : actor.position.x;
      actor.position.y = this.appHeight;
      let dir = new Vector2d();
      dir.x = 0;
      dir.y = -1;
      actor.direction = dir;

      actor.addBehaviour(new SeekBehaviour(10, this.base.towers[0]));
      let tiles = this.base.tiles;
      for (let j = 0; j < tiles.length; j++) {
        let tile = tiles[j];
        actor.addBehaviour(new AvoidBehaviour(100, tile, 20));
      }

      let boundsBehaviour = new BoundsBehaviour(0, this.appWidth, 0, this.appHeight);
      actor.addBehaviour(boundsBehaviour);
      actor.image = "arrow";
      this.actors.push(actor);

    }
    let timer = TimerObservable.create(200, 5);
    this.subscription = timer.subscribe(() => {
      this.update()
    });
  }

}
