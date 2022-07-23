import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ex1ColorLayoutComponent } from './ex1-color-layout/ex1-color-layout.component';
import { Ex1HeaderComponent } from './ex1-color-layout/ex1-header/ex1-header.component';
import { Ex1ContentComponent } from './ex1-color-layout/ex1-content/ex1-content.component';
import { Ex1SidebarComponent } from './ex1-color-layout/ex1-sidebar/ex1-sidebar.component';
import { Ex1FooterComponent } from './ex1-color-layout/ex1-footer/ex1-footer.component';
import { Ex2ProductWebModule } from './ex2-product-web/ex2-product-web.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module';
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module';
import { InteractionModule } from './interaction/interaction.module';
import { BusExModule } from './bus-ex/bus-ex.module';


@NgModule({
  declarations: [
    AppComponent,
    Ex1ColorLayoutComponent,
    Ex1HeaderComponent,
    Ex1ContentComponent,
    Ex1SidebarComponent,
    Ex1FooterComponent,
  ],
  imports: [
    BrowserModule,
    Ex2ProductWebModule,
    DataBindingModule,
    StructuralDirectiveModule,
    AttributeDirectiveModule,
    InteractionModule,
    BusExModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
