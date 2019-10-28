import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class mylistService {
  movies = [
    { id: '3198', name: 'JOKER', Release:'2019',Catagory:'drama'},
    { id: '3199', name: 'DARK NIGHT',Release:'2019',Catagory:'drama' },
    { id: '3200', name: 'NEED FOR SPEED',Release:'2019',Catagory:'drama' },
    { id: '3201', name: 'FAST AND FURIOUS',Release:'2019',Catagory:'drama' },
    { id: '3204', name: 'KOLI NUMBER 1',Release:'2019',Catagory:'drama' },
    { id: '3217', name: 'NASEEB',Release:'2019',Catagory:'drama' },
    { id: '3222', name: 'WRONG TURN',Release:'2019',Catagory:'drama' },
    { id: '3223', name: 'THIRTY NIGHT OF DARKNESS',Release:'2019',Catagory:'drama' },
    { id: '3225', name: 'JOHN VIRK',Release:'2019',Catagory:'drama' }
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


