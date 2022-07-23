import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  status: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  show() {
    this.status = true;
  }
  hide() {
    this.status = false;
  }
  toggle() {
    this.status = !this.status;
  }

}
