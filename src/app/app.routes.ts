import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { Error404Component } from './components/errors/error404/error404.component';

export const routes: Routes = [
    {
       path: '',
       component: MainComponent,
       children: [
           {
               path: '',
               loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
           },
           {
               path: 'dashboard',
               loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
           },
           {
               path: 'categories',
               loadChildren: './modules/category/category.module#CategoryModule'
           },
           {
               path: 'movies',
               loadChildren: './modules/movie/movie.module#MovieModule'
           }
       ]
    },
    {
        path: '**', component: Error404Component,
    },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
