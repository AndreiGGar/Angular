import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { MusicComponent } from './components/music/music.component';
import { Error404Component } from './components/error404/error404.component';
import { MenuComponent } from './components/menu/menu.component';
import { DoublenumberComponent } from './components/doublenumber/doublenumber.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CinemaComponent,
    MusicComponent,
    Error404Component,
    MenuComponent,
    DoublenumberComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
