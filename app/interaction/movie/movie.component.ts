import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: any;
  @Output() eventLike = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  like() {
    this.eventLike.emit(this.movie);
  }
  test() {
    console.log("test");
  }

}
