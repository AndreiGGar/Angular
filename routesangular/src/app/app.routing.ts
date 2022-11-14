import { HomeComponent } from "./components/home/home.component";
import { CinemaComponent } from "./components/cinema/cinema.component";
import { MusicComponent } from "./components/music/music.component";
import { Error404Component } from "./components/error404/error404.component";
import { DoublenumberComponent } from "./components/doublenumber/doublenumber.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cinema", component: CinemaComponent },
  { path: "music", component: MusicComponent },
  { path: "doublenumber", component: DoublenumberComponent },
  { path: "doublenumber/:number", component: DoublenumberComponent },
  { path: "**", component: Error404Component },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);