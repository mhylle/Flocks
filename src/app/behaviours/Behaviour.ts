import {Actor} from "../model/Actor";
export interface Behaviour {
  update(actor: Actor);
  getActor() : Actor;
}
