import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieComponent } from './movie/movie.component';



@NgModule({
  declarations: [
    InteractionComponent,
    ListMoviesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [InteractionComponent]
})
export class InteractionModule { }
