import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { Error404Component } from './components/error404/error404.component';
import { SeriesComponent } from './components/series/series.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SeriesService } from './services/series.service';
import { CharactersService } from './services/characters.service';
import { NewcharacterComponent } from './components/newcharacter/newcharacter.component';
import { UpdatecharacterComponent } from './components/updatecharacter/updatecharacter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    Error404Component,
    SeriesComponent,
    CharactersComponent,
    NewcharacterComponent,
    UpdatecharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SeriesService, CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
