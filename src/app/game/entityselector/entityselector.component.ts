import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'entityselector',
  templateUrl: './entityselector.component.html',
  styleUrls: ['./entityselector.component.css']
})
export class EntityselectorComponent implements OnInit {

  selectedEntities: any[] = [];
  availableEntities: any[] = [];

  constructor() {
  }

  ngOnInit() {

    this.availableEntities.push("Tank");
    this.availableEntities.push("DPS");
    this.availableEntities.push("Spawner");
    this.availableEntities.push("Healer");
  }

  selectEntity(entity: any) {
    let indexOf = this.availableEntities.indexOf(entity);
    if (indexOf > -1) {
      this.availableEntities.splice(indexOf, 1);
      this.selectedEntities.push(entity);
    }
  }

  deSelectEntity(entity: any) {
    let indexOf = this.selectedEntities.indexOf(entity);
    if (indexOf > -1) {
      this.selectedEntities.splice(indexOf, 1);
      this.availableEntities.push(entity);
    }

  }

}
