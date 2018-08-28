import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CategoryListComponent } from './components/category-list/category-list.component';

const routes: Routes = [
    {
        path: '',
        component: CategoryListComponent
    }
];

export const CategoryRoutes: ModuleWithProviders = RouterModule.forChild(routes);
