import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ex2ProductWebComponent } from './ex2-product-web.component';
import { Ex2HeaderComponent } from './ex2-header/ex2-header.component';
import { Ex2CardComponent } from './ex2-card/ex2-card.component';
import { Ex2CardItemComponent } from './ex2-card-item/ex2-card-item.component';
import { Ex2WwdComponent } from './ex2-wwd/ex2-wwd.component';
import { Ex2FooterComponent } from './ex2-footer/ex2-footer.component';
import { Ex2CarouselComponent } from './ex2-carousel/ex2-carousel.component';



@NgModule({
  declarations: [
    Ex2ProductWebComponent,
    Ex2HeaderComponent,
    Ex2CardComponent,
    Ex2CardItemComponent,
    Ex2WwdComponent,
    Ex2FooterComponent,
    Ex2CarouselComponent
  ],
  exports: [
    Ex2ProductWebComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Ex2ProductWebModule { }
