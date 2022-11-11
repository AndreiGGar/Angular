import {Component} from '@angular/core';

@Component({
  selector: 'firstangular',
  templateUrl: './component.html',
  // styleUrls: ['./component.css']
})

export class FirstComponent {
  public title: string;
  public desc: string;
  public year: string;
  
  constructor() {
    this.title = 'Angular Title';
    this.desc = 'Angular Description';
    this.year = '2022';
  }
}