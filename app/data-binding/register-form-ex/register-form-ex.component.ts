import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form-ex',
  templateUrl: './register-form-ex.component.html',
  styleUrls: ['./register-form-ex.component.scss']
})
export class RegisterFormExComponent implements OnInit {

  fullname: string = "";
  email: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  submit(param: any) {
    this.fullname = param;
  }

}
