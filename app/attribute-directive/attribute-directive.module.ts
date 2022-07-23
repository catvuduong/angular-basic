import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    AttributeDirectiveComponent,
    NgClassComponent,
    NgStyleComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [AttributeDirectiveComponent]
})
export class AttributeDirectiveModule { }
