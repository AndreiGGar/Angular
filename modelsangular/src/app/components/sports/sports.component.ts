import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  public sports: Array<string>;
  public message!: string;

  selectFavorite(event: any): void {
    this.message = "Selected sport: " + event;
  }

  constructor() {
    this.sports = ['Football', 'Basketball', 'Baseball', 'Tennis', 'Golf'];
  }

  ngOnInit(): void {}
}
