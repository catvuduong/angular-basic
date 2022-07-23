import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIfComponent } from '../structural-directive/ng-if/ng-if.component';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PhoneExComponent } from './phone-ex/phone-ex.component';

@NgModule({
  declarations: [
    NgIfComponent,
    StructuralDirectiveComponent,
    NgSwitchComponent,
    NgForComponent,
    PhoneExComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StructuralDirectiveComponent
  ]
})
export class StructuralDirectiveModule { }
