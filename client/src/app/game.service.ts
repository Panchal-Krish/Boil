import { Injectable } from '@angular/core';
import { Game } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseURI = "http://localhost:8080/games";

  constructor(private http: HttpClient) { }

  getGamesList() {
    return this.http.get<Game[]>(this.baseURI);
  }

  searchGame(game: string) {
    return this.http.get<Game>(`${this.baseURI}/${game}`);
  }
}
