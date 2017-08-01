import {Component, OnDestroy, OnInit} from "@angular/core";
import {Player} from "./model/Player";
import {Unit} from "./model/Unit";
import {PlayerService} from "./game/player.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Flock!';
  player: Player;

  constructor(private playerService: PlayerService) {

  }

  ngOnInit(): void {
    this.player = this.playerService.getPlayer();
  }

  ngOnDestroy(): void {
  }

}
