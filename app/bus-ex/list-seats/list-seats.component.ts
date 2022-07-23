import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SeatComponent } from '../seat/seat.component';

@Component({
  selector: 'app-list-seats',
  templateUrl: './list-seats.component.html',
  styleUrls: ['./list-seats.component.scss']
})
export class ListSeatsComponent implements OnInit {
  @ViewChildren(SeatComponent) tagSeats !: QueryList<SeatComponent>;
  constructor() { }
  seatArr: any = [
    { no: 1, name: "số 1", price: 100, status: false },
    { no: 2, name: "số 2", price: 100, status: false },
    { no: 3, name: "số 3", price: 100, status: false },
    { no: 4, name: "số 4", price: 100, status: false },
    { no: 5, name: "số 5", price: 100, status: false },
    { no: 6, name: "số 6", price: 100, status: false },
    { no: 7, name: "số 7", price: 100, status: false },
    { no: 8, name: "số 7", price: 100, status: false },
    { no: 9, name: "số 9", price: 100, status: false },
    { no: 10, name: "số 10", price: 100, status: false },
    { no: 11, name: "số 11", price: 100, status: false },
    { no: 12, name: "số 12", price: 100, status: false },
    { no: 13, name: "số 13", price: 100, status: false },
    { no: 14, name: "số 14", price: 100, status: false },
    { no: 15, name: "số 15", price: 100, status: false },
    { no: 16, name: "số 16", price: 100, status: false },
    { no: 17, name: "số 17", price: 100, status: false },
    { no: 18, name: "số 18", price: 100, status: false },
    { no: 19, name: "số 19", price: 100, status: false },
    { no: 20, name: "số 20", price: 100, status: false },
    { no: 21, name: "số 21", price: 100, status: false },
    { no: 22, name: "số 22", price: 100, status: false },
    { no: 23, name: "số 23", price: 100, status: false },
    { no: 24, name: "số 24", price: 100, status: false },
    { no: 25, name: "số 25", price: 100, status: false },
    { no: 26, name: "số 26", price: 100, status: false },
    { no: 27, name: "số 27", price: 100, status: false },
    { no: 28, name: "số 28", price: 100, status: false },
    { no: 29, name: "số 29", price: 100, status: false },
    { no: 30, name: "số 30", price: 100, status: true },
    { no: 31, name: "số 31", price: 100, status: false },
    { no: 32, name: "số 32", price: 100, status: false },
    { no: 33, name: "số 33", price: 100, status: false },
    { no: 34, name: "số 34", price: 100, status: false },
    { no: 35, name: "số 35", price: 100, status: false },
  ];

  seatedArr: any = [];

  ngOnInit(): void {
  }

  setSeat(object: any) {
    if (object.status) {
      this.seatedArr.push(object.seat);
    } else {
      let index: any = this.seatedArr.findIndex((item: any) => item.no === object.seat.no);
      this.seatedArr.splice(index, 1);
      object.status = false;
    }
  }

  cancle(index: any, no: any) {
    this.seatedArr.splice(index, 1);
    this.tagSeats.map(item => {
      // console.log(item);
      if (item.seat.no === no) {
        item.status = false;
      }
    })
  }

}
