import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from '../components/firstcomponent/component';
import { HooksComponent } from '../components/hooksangular/hooks.component';
import { SportsComponent } from '../components/sportscomponent/sports.component';
import { FormComponent } from '../components/formcomponent/form.component';
import { SumComponent } from '../components/sumcomponent/sum.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HooksComponent,
    SportsComponent,
    FormComponent,
    SumComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
