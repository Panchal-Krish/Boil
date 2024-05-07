import { Injectable } from '@angular/core';
import { Game } from './model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games:Game[] = [
    { name: 'Valorant', image: '../assets/images/valorant.jpeg', storage: '50gb', desc:'Chutiya Game', trailerLink:'..//', downLink:'..//'  },
    { name: 'Call of duty MF-3', image: '../assets/images/Callofduty.jpeg',storage: '100gb', desc:'Chutiya Game', trailerLink:'..//', downLink:'..//' },
    { name: 'Phasmophobia', image: '../assets/images/Phasmophobia.jpeg',storage: '20gb',desc:'Chutiya Game', trailerLink:'..//', downLink:'..//' },

  ];
  constructor() { }
}
