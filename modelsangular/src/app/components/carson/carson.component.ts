import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-carson',
  templateUrl: './carson.component.html',
  styleUrls: ['./carson.component.css']
})
export class CarsonComponent implements OnInit {
  @Input() car!: Car;
  public message!: string;

  constructor() {}

  checkStatus(): boolean {
    if (this.car.status == false) {
      this.message = "The car is off";
      this.car.speed = 0;
      return false;
    } else {
      this.message = "The car is on";
      return true;
    }
  }

  startEngine(): void {
    this.car.status = !this.car.status;
    this.checkStatus();
  }

  accelerate(): void {
    if (this.checkStatus() == true) {
      this.car.speed += this.car.acceleration;
    } else {
      alert("Bruh... you need to turn on the car first");
    }
  }

  ngOnInit(): void {
    this.checkStatus();
  }

}
