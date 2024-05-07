import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../model';
import { NgIf, TitleCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [NgIf, TitleCasePipe],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.css'
})
export class GameInfoComponent implements OnInit {
  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  watchTrailer(trailerLink: string) {
    console.log('Trailer link:', trailerLink);
    window.open(trailerLink, '_blank');
  }

  downloadGame(downloadLink: string) {
    // Open the download link in a new tab
    window.open(downloadLink, '_blank');
  }
  game: Game | undefined;

  ngOnInit(): void {
    const gameName = this.route.snapshot.paramMap.get("game");
    console.log(gameName);

    if (gameName)
      this.gameService.searchGame(gameName).subscribe(resp => this.game = resp);
  }
}
