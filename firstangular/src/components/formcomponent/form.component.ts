import {Component} from '@angular/core';

@Component({
  selector: 'form-component',
  templateUrl: '../formcomponent/form.component.html',
  // styleUrls: ['../formcomponent/form.component.css']
})

export class FormComponent{
  public user: any;
  public message: string;

  constructor() {
    this.user = {
      name: '',
      surname: '',
      age: '',
    };
    this.message = '';
  }
  getData() :void {
    console.log('Submitted data: ' + this.user.name + ' ' + this.user.surname + ' ' + this.user.age);
    this.message = 'Data submitted successfully';
  }
}