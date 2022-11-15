import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-carparent',
  templateUrl: './carparent.component.html',
  styleUrls: ['./carparent.component.css']
})
export class CarparentComponent implements OnInit {
  public cars: Array<Car>;

  constructor() {
    this.cars = [
      new Car("Chevrolet", "Camaro", 250, 15, true),
      new Car("Dodge", "Challenger", 300, 20, true),
      new Car("Toyota", "Supra", 350, 25, true), 
    ]
  }

  ngOnInit(): void {
  }

}
