import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutes } from './movie.routes';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutes
  ],
  declarations: [
    MovieListComponent
  ]
})
export class MovieModule { }
