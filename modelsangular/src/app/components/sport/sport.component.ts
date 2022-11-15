import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  @Input() sport!: string;
  @Output() selectFavorite: EventEmitter<any> = new EventEmitter();

  selectFavoriteMethod(): void {
    this.selectFavorite.emit(this.sport);
  }
    

  constructor() { }

  ngOnInit(): void {
  }

}
