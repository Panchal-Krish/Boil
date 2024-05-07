import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  providers:[GameService]
})
export class HomepageComponent implements OnInit{
  
  games: Game[] = []
  filteredGames:any =  [];
  searchText: string = '';

  constructor(private gameService:GameService) {
    // this.filteredGames = [...this.games];
  }

  
  ngOnInit(): void {
      this.games = this.gameService.games
  }
}
