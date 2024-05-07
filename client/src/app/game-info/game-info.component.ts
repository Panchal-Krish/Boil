import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [NgIf],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.css'
})
export class GameInfoComponent implements OnInit{
  games: Game[] = []
  filteredGames:any =  [];
  searchText: string = '';

  constructor(private gameService:GameService) {
    // this.filteredGames = [...this.games];
  }

  watchTrailer(trailerLink: string) {
    console.log('Trailer link:', trailerLink);
    window.open(trailerLink, '_blank');
  }

  downloadGame(downloadLink: string) {
    // Open the download link in a new tab
    window.open(downloadLink, '_blank');
  }

  ngOnInit(): void {
      this.games = this.gameService.games
  }
}
