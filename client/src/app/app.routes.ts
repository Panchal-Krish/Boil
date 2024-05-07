import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GameInfoComponent } from './game-info/game-info.component';

export const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'home', component: HomepageComponent },
  {path: 'info',component:GameInfoComponent}
  // Add other routes if necessary
];
