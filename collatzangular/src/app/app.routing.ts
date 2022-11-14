import { HomeComponent } from "./components/home/home.component";
import { Error404Component } from "./components/error404/error404.component";
import { CollatzComponent } from "./components/collatz/collatz.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "collatz", component: CollatzComponent },
  { path: "collatz/:number", component: CollatzComponent },
  { path: "**", component: Error404Component },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);