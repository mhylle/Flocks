import {Component, OnDestroy, OnInit} from "@angular/core";
import {Actor} from "./model/Actor";
import {WanderBehaviour} from "./behaviours/WanderBehaviour";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Subscription} from "rxjs/Subscription";
import {BoundsBehaviour} from "./behaviours/BoundsBehaviour";
import {SeekBehaviour} from "./behaviours/SeekBehaviour";
import {AvoidBehaviour} from "./behaviours/AvoidBehaviour";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  nrOfBirds: number = 200;
  actors: Actor[] = [];

  private subscription: Subscription;

  constructor() {

  }

  ngOnInit(): void {
    let leader = null;
    for (let i = 0; i < this.nrOfBirds; i++) {

      let bird = new Actor();
      if (i == 0) {
        bird.image ="leader";
        leader = bird;
      }
      bird.name = "Bird" + i;
      bird.direction = Actor.getRandomDirection();
      bird.speed = 0.01;
      bird.position = Actor.getRandomPosition(800, 800);

      let wanderBehaviour = new WanderBehaviour(0.10, 80);
      bird.addBehaviour(wanderBehaviour);

      let boundsBehaviour = new BoundsBehaviour(0, 800, 0, 800);
      bird.addBehaviour(boundsBehaviour);

      if (i > 0) {
        let seekBehaviour = new SeekBehaviour(35, leader);
        bird.image ="arrow"
        bird.addBehaviour(seekBehaviour);
      }

      this.actors.push(bird);
    }
    for (let i = 0; i < this.actors.length; i++) {
      let mainBird = this.actors[i];
      for (let j = 0; j < this.actors.length; j++) {
        let currentBird = this.actors[i];
        if (i == j) {
          continue;
        }
        let avoidBehaviour = new AvoidBehaviour(100, currentBird,25.0);
        mainBird.addBehaviour(avoidBehaviour);
      }
    }
    let timer = TimerObservable.create(200, 5);
    this.subscription = timer.subscribe(() => {
      this.update()
    });
  }

  update() {
    for (let i = 0; i < this.actors.length; i++) {
      let actor = this.actors[i];
      actor.update();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
