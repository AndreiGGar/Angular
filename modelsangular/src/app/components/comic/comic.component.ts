import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() comic!: any;
  @Input() index!: any;
  @Output() selectFavorite: EventEmitter<any> = new EventEmitter();
  @Output() editComic: EventEmitter<any> = new EventEmitter();
  @Output() deleteComic: EventEmitter<any> = new EventEmitter();

  selectFavoriteMethod(): void {
    this.selectFavorite.emit(this.comic.name);
  }

  deleteComicMethod(): void {
    this.deleteComic.emit(this.index);
  }

  editComicMethod(): void {
    this.editComic.emit(this.index);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
