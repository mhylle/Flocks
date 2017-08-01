import {Component, OnInit} from '@angular/core';
import {EntityService} from "../entity.service";
import {Unit} from "../../model/Unit";
import {PlayerService} from "../player.service";

@Component({
  selector: 'entityselector',
  templateUrl: './entityselector.component.html',
  styleUrls: ['./entityselector.component.css'],
  providers: [EntityService]
})
export class EntitySelectorComponent implements OnInit {

  selectedEntities: Unit[] = [];
  availableEntities: Unit[] = [];

  constructor(private playerService: PlayerService, private entityService: EntityService) {
  }

  ngOnInit() {
    this.availableEntities = this.entityService.getUnits();
  }

  selectEntity(entity: Unit) {
    let player = this.playerService.getPlayer();
    if (player.points > entity.cost) {
      let indexOf = this.availableEntities.indexOf(entity);
      if (indexOf > -1) {
        this.availableEntities.splice(indexOf, 1);
        this.selectedEntities.push(entity);
        player.points = player.points - entity.cost;
      }
    }
  }

  deSelectEntity(entity: Unit) {
    let player = this.playerService.getPlayer();
    let indexOf = this.selectedEntities.indexOf(entity);
    if (indexOf > -1) {
      this.selectedEntities.splice(indexOf, 1);
      this.availableEntities.push(entity);
      player.points = player.points + entity.cost;
    }

  }

}
