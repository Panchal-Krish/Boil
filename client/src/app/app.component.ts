import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { GameInfoComponent } from "./game-info/game-info.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomepageComponent, HomepageComponent, WelcomePageComponent, GameInfoComponent]
})
export class AppComponent {
  title = 'Boil';
}
