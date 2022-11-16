import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComicsService } from './services/comics.service';
import { PersonService } from './services/person.service';

import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { ComicComponent } from './components/comic/comic.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicsaddComponent } from './components/comicsadd/comicsadd.component';
import { PersonComponent } from './components/person/person.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    Error404Component,
    ComicComponent,
    ComicsComponent,
    ComicsaddComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ComicsService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
