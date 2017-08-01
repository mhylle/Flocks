import {Component, OnInit} from '@angular/core';
import {EntityService} from "../entity.service";
import {Unit} from "../../model/Unit";
import {PlayerService} from "../player.service";

@Component({
  selector: 'entityselector',
  templateUrl: './entityselector.component.html',
  styleUrls: ['./entityselector.component.css']
})
export class EntitySelectorComponent implements OnInit {

  selectedEntities: Unit[] = [];
  availableEntities: Unit[] = [];

  constructor(private playerService: PlayerService, private entityService: EntityService) {
  }

  ngOnInit() {
    this.availableEntities = this.entityService.getUnits();
  }

  selectUnit(unit: Unit) {
    let player = this.playerService.getPlayer();
    if (player.points > unit.cost) {
      let indexOf = this.availableEntities.indexOf(unit);
      if (indexOf > -1) {
        this.availableEntities.splice(indexOf, 1);
        this.selectedEntities.push(unit);
        this.entityService.selectUnit(unit);
        player.points = player.points - unit.cost;
      }
    }
  }

  deSelectUnit(unit: Unit) {
    let player = this.playerService.getPlayer();
    let indexOf = this.selectedEntities.indexOf(unit);
    if (indexOf > -1) {
      this.selectedEntities.splice(indexOf, 1);
      this.availableEntities.push(unit);
      this.entityService.deSelectUnit(unit);
      player.points = player.points + unit.cost;
    }

  }

}
