import {Component, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'hooks-angular',
  templateUrl: '../hooksangular/hooks.component.html',
  // styleUrls: ['./component.css']
})

export class HooksComponent implements OnInit, DoCheck{
  public message: string;
  constructor() {
    this.message = 'Angular Message';
  }
  ngOnInit() {
    console.log("ngOnInit()")
  }
  ngDoCheck() {
    console.log("ngDoCheck()")
  }
  changeMessage() :void {
    this.message = 'New Message';
  }
}