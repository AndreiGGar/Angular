import {Component} from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: '../sportscomponent/sports.component.html',
  styleUrls: ['../sportscomponent/sports.component.css']
})

export class SportsComponent{
  // public sports: Array<string>;
  // public numbers: Array<number>;
  public sports: Array<any>;
  public numbers: Array<any>;

  constructor() {
    this.sports = ['Football', 'Basketball', 'Baseball', 'Hockey'];
    this.numbers = [7, 21, 44, 32, 57, 68, 99];
  }
}