import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  arrInsects = [
    { name: "Bee", type: "Electric" },
    { name: "Ant", type: "Leave" },
    { name: "Beetle", type: "Earth" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
