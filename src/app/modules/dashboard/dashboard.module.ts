import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routes';
import { DashboardIndexComponent } from './components/dashboard-index/dashboard-index.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes
  ],
  declarations: [DashboardIndexComponent]
})
export class DashboardModule { }
