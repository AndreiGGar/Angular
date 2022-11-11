import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'sum-component',
  templateUrl: '../sumcomponent/sum.component.html',
  // styleUrls: ['../formcomponent/form.component.css']
})
export class SumComponent {
  @ViewChild('boxNumber1') n1: ElementRef;
  @ViewChild('boxNumber2') n2: ElementRef;
  public sum: any;

  constructor() {
    this.sum = '';
    this.n1 = new ElementRef(0);
    this.n2 = new ElementRef(0);
  }

  sumNumbers(): void {
    var num1 = this.n1.nativeElement.value;
    var num2 = this.n2.nativeElement.value;
    this.sum = parseInt(num1) + parseInt(num2);
  }
}
