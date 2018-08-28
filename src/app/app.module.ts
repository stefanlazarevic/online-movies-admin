import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainComponent } from './components/main/main.component';
import { Error404Component } from './components/errors/error404/error404.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Error404Component,
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
