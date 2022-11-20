import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { SeriesComponent } from './components/series/series.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NewcharacterComponent } from './components/newcharacter/newcharacter.component';
import { UpdatecharacterComponent } from './components/updatecharacter/updatecharacter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'series/:id', component: SeriesComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/new', component: NewcharacterComponent },
  { path: 'characters/update', component: UpdatecharacterComponent },
  { path: 'characters/:id', component: CharactersComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
