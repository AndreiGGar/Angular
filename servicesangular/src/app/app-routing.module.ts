import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicsaddComponent } from './components/comicsadd/comicsadd.component';
import { PersonComponent } from './components/person/person.component';
import { EmployerssalaryComponent } from './components/employerssalary/employerssalary.component';
import { EmployersofficeComponent } from './components/employersoffice/employersoffice.component';
import { MasteremployersComponent } from './components/masteremployers/masteremployers.component';
import { DetailsemployersComponent } from './components/detailsemployers/detailsemployers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comicsadd', component: ComicsaddComponent },
  { path: 'person', component: PersonComponent },
  { path: 'employerssalary', component: EmployerssalaryComponent },
  { path: 'employersoffice', component: EmployersofficeComponent },
  { path: 'masteremployers', component: MasteremployersComponent },
  { path: 'masteremployers/details/:id', component: DetailsemployersComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
