import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../model';
import { GameService } from '../game.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor, FormsModule, RouterOutlet, RouterModule, NgIf, TitleCasePipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  providers: [GameService]
})
export class HomepageComponent implements OnInit {
  games: Game[] = [];
  searchText: string = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGamesList().subscribe(resp => this.games = resp);
  }

  searchGame(game: string) {
    if (game == "") {
      this.gameService.getGamesList().subscribe(resp => this.games = resp);
    } else {
      this.games = [];
      this.gameService.searchGame(game).subscribe(resp => this.games.push(resp)
      );
    }
  }
}