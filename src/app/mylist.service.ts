import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class mylistService {
  movies = [
    { id: '3198', name: 'JOKER' },
    { id: '3199', name: 'DARK NIGHT' },
    { id: '3200', name: 'NEED FOR SPEED' },
    { id: '3201', name: 'FAST AND FURIOUS' },
    { id: '3204', name: 'KOLI NUMBER 1' },
    { id: '3217', name: 'NASEEB' },
    { id: '3222', name: 'WRONG TURN' },
    { id: '3223', name: 'THIRTY NIGHT OF DARKNESS' },
    { id: '3225', name: 'JOHN VIRK' }
  ];

  constructor() {}

  get getmovies() {
    return this.movies;
  }

  getAllmovies() {
    return this.movies;
  }

  deletemovies(id:string) {
    this.movies = this.movies.filter(e => {
      return e.id !== id;
    });
  }
}


