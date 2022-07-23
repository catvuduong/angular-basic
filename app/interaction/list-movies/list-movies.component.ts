import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  @ViewChildren(MovieComponent) tagMovies !: QueryList<MovieComponent>;
  listMovies = [
    { code: 1, name: "Minions", price: "85000", thumbnail: "./assets/images/minions.jpg" },
    { code: 2, name: "Home", price: "90000", thumbnail: "./assets/images/home.jpg" },
    { code: 3, name: "Harvie", price: "10000", thumbnail: "./assets/images/harvie.jpg" },
    { code: 4, name: "Insideout", price: "11000", thumbnail: "./assets/images/insideout.jpg" },
  ];

  listLikes = [
    { code: 1, movie: "Minions", like: 0 },
    { code: 2, movie: "Home", like: 0 },
    { code: 3, movie: "Harvie", like: 0 },
    { code: 4, movie: "Insideout", like: 0 },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  likeMovie(movie: any) {
    const mo: any = this.listLikes.find(item => item.code === movie.code);
    mo.like++;
  }
  addMovie(movie: any) {
    this.listMovies.push(movie)
  }

  viewChildren() {
    // console.log(this.tagMovies);
    this.tagMovies.map(item => {
      if (item.movie.code === 2) {
        //movie tagMovies = attribute we set at list movie html.
        item.movie.price = (Math.floor(Math.random() * 10) + 1) * 10000;
      }
    })

  }

}
