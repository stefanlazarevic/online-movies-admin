import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutes } from './category.routes';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutes
  ],
  declarations: [
    CategoryListComponent
  ]
})
export class CategoryModule { }
