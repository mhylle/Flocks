import {Component, OnDestroy, OnInit} from "@angular/core";
import {Player} from "./model/Player";
import {Unit} from "./model/Unit";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Flock!';
  player: Player;

  units: Unit[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.player = new Player();
    this.player.firstName = "Martin";
    this.player.lastName = "Hylleberg";
    this.player.nickName = "Hives";
    this.player.gems = 245;
    this.player.score = 0;
    this.player.points = 100;

    let u1 = new Unit();
    u1.name = "Tanky";
    u1.score = 20;
    u1.size = 1;
    u1.hp = 120;
    u1.level = 1;
    u1.speed = 0.4;
    this.units.push(u1);
    let u2 = new Unit();
    u2.name = "DPSy";
    u2.score = 25;
    u2.size = .5;
    u2.hp = 40;
    u2.level = 1;
    u2.speed = 0.8;
    this.units.push(u2);
    let u3 = new Unit();
    u3.name = "Spawnerony";
    u3.score = 30;
    u3.size = .7;
    u3.hp = 30;
    u3.level = 1;
    u3.speed = 0.5;
    this.units.push(u3);
    let u4 = new Unit();
    u4.name = "Healy";
    u4.score = 30;
    u4.size = .5;
    u4.hp = 20;
    u4.level = 1;
    u4.speed = 0.5;
    this.units.push(u4);
  }

  ngOnDestroy(): void {
  }

}
