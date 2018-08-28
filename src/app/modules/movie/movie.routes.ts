import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
    {
        path: '',
        component: MovieListComponent
    }
];

export const MovieRoutes: ModuleWithProviders = RouterModule.forChild(routes);
