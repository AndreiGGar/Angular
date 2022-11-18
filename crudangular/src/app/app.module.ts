import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { Error404Component } from './components/error404/error404.component';
import { EmployersComponent } from './components/employers/employers.component';
import { DepartmentsService } from './services/departments.service';
import { EmployersService } from './services/employers.service';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentsnewComponent } from './components/departmentsnew/departmentsnew.component';
import { DepartmentseditComponent } from './components/departmentsedit/departmentsedit.component';
import { DepartmentsdeleteComponent } from './components/departmentsdelete/departmentsdelete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    Error404Component,
    EmployersComponent,
    DepartmentsComponent,
    DepartmentsnewComponent,
    DepartmentseditComponent,
    DepartmentsdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DepartmentsService, EmployersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
