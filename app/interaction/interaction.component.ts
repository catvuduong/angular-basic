import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ListMoviesComponent } from './list-movies/list-movies.component';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
  @ViewChild(ListMoviesComponent, { static: false }) tagListMove: any = ListMoviesComponent;
  @ViewChild("inputName", { static: false }) inputName: any = ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  add(code: any, name: any, price: any, thumbnail: any) {
    const movie = { code, name, price, thumbnail };
    // console.log(this.tagListMove);
    this.tagListMove.addMovie(movie);
  }
  domHTML() {
    console.log(this.inputName.nativeElement.value);
  }
}
