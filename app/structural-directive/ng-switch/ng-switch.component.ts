import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  switchProviso: string = "default";
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(value: any) {
    this.switchProviso = value;
  }

}
