import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() seat: any;
  @Output() eventSeat = new EventEmitter;
  status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  setSeat() {
    this.status = !this.status;
    const ojbSeat = {
      status: this.status,
      seat: this.seat
    }
    this.eventSeat.emit(ojbSeat);
  }
}
