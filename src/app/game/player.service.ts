import {Injectable} from '@angular/core';
import {Unit} from "../model/Unit";
import {Player} from "../model/Player";

@Injectable()
export class PlayerService {
  player: Player;
  constructor() {
    this.createPlayerData();
  }

  private createPlayerData() {
    this.player = new Player();
    this.player.firstName = "Martin";
    this.player.lastName = "Hylleberg";
    this.player.nickName = "Hives";
    this.player.gems = 245;
    this.player.score = 0;
    this.player.points = 100;
  }

  getPlayer(): Player {
    return this.player;
  }
}
