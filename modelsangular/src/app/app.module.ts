import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { CarsonComponent } from './components/carson/carson.component';
import { CarparentComponent } from './components/carparent/carparent.component';
import { SportComponent } from './components/sport/sport.component';
import { SportsComponent } from './components/sports/sports.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicComponent } from './components/comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductslistComponent,
    CarsonComponent,
    CarparentComponent,
    SportComponent,
    SportsComponent,
    ComicsComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
