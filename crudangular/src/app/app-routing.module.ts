import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { EmployersComponent } from './components/employers/employers.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentsnewComponent } from './components/departmentsnew/departmentsnew.component';
import { DepartmentseditComponent } from './components/departmentsedit/departmentsedit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'departments/new', component: DepartmentsnewComponent },
  { path: 'departments/employers', component: EmployersComponent },
  { path: 'departments/employers/:id', component: EmployersComponent },
  { path: 'departments/edit/:id', component: DepartmentseditComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
