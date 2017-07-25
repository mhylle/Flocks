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
  nrOfBirds: number = 100;
  actors: Actor[] = [];

  appWidth = 300;
  appHeight = 300;
  private subscription: Subscription;

  constructor() {

  }

  ngOnInit(): void {
    let leader = null;
    for (let i = 0; i < this.nrOfBirds; i++) {

      let bird = new Actor();
      if (i == 0) {
        bird.image = "leader";
        leader = bird;
        bird.speed = 5;
      } else {
        let random = Math.random();
        bird.speed = 3 * random +1;
      }
      bird.name = "Bird" + i;
      bird.direction = Actor.getRandomDirection();

      bird.position = Actor.getRandomPosition(this.appWidth, this.appHeight);

      let wanderBehaviour = new WanderBehaviour(80, 8);
      bird.addBehaviour(wanderBehaviour);

      let boundsBehaviour = new BoundsBehaviour(0, this.appWidth, 0, this.appHeight);
      bird.addBehaviour(boundsBehaviour);

      if (i > 0) {
        let seekBehaviour = new SeekBehaviour(10, leader);
        bird.image = "arrow";
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
        let avoidBehaviour = new AvoidBehaviour(10, currentBird, 25.0);
        mainBird.addBehaviour(avoidBehaviour);
      }
    }
    let timer = TimerObservable.create(200, 25);
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
