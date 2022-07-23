import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusExComponent } from './bus-ex.component';
import { ListSeatsComponent } from './list-seats/list-seats.component';
import { SeatComponent } from './seat/seat.component';



@NgModule({
  declarations: [
    BusExComponent,
    ListSeatsComponent,
    SeatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BusExComponent]
})
export class BusExModule { }
