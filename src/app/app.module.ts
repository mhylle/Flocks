import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BuilderComponent} from './base/builder/builder.component';
import {OverviewComponent} from './base/overview/overview.component';
import {LegacyComponent} from './legacy/legacy.component';
import {RouterModule, Routes} from "@angular/router";
import { GameComponent } from './game/game.component';
import { EntityselectorComponent } from './game/entityselector/entityselector.component';


const appRoutes: Routes = [
  {path: 'base', component: OverviewComponent},
  {path: 'base/build', component: BuilderComponent},
  {path: 'play', component: GameComponent},
  {
    path: '',
    redirectTo: '/base',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    OverviewComponent,
    LegacyComponent,
    GameComponent,
    EntityselectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
