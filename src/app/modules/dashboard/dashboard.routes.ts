import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardIndexComponent } from './components/dashboard-index/dashboard-index.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardIndexComponent
    }
];

export const DashboardRoutes: ModuleWithProviders = RouterModule.forChild(routes);
