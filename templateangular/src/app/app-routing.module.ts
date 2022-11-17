import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FunctionstemplateComponent } from './components/functionstemplate/functionstemplate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'functions', component: FunctionstemplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
