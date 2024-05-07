import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'home/:game', component: GameInfoComponent },
  { path: "**", component: PageNotFoundComponent },
  // Add other routes if necessary
];
