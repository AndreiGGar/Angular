import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public numbers: Array<any>;
  constructor() {
    this.numbers = [];
  }

  randomNumbers(): void {
    for (let i = 0; i < 10; i++) {
      this.numbers.push(Math.floor(Math.random() * 100));
    }
  }

  ngOnInit(): void {
    this.randomNumbers();
  }
}
