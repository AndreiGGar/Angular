import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'multiplication-component',
  templateUrl: '../multiplicationcomponent/multiplication.component.html',
  // styleUrls: ['../formcomponent/form.component.css']
})
export class MultiplicationComponent {
  @ViewChild('boxNumber1') n1!: ElementRef;
  public multiplication: Array<any>;

  constructor() {
    this.multiplication = [];
  }

  multiplicationNumbers(): void {
    var num1 = this.n1.nativeElement.value;
    this.multiplication = [];
    
    // if (num1 != null || num1 != undefined || num1 != '' || num1 != ' ') {
      for (var i = 1; i <= 10; i++) {
        this.multiplication.push(num1 + ' ' + ' * ' + i + ' = ' + num1 * i);
      }
    // }
  }
}
