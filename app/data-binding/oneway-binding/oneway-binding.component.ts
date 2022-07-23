import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {

  name: string = "Cybersoft";
  email: string = "cybersoft@gmail.com";
  constructor() { }

  ngOnInit(): void {
  }

  eventBinding(param: any) {
    console.log(param.value);
  }

}
