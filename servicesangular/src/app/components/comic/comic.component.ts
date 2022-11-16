import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild('boxHero') hero!: ElementRef;
  @ViewChild('boxImage') image!: ElementRef;
  @ViewChild('boxName') name!: ElementRef;

  public heroBox!: string;
  public imageBox!: string;
  public nameBox!: string;

  selectFavoriteMethod(): void {
    this.selectFavorite.emit(this.comic.name);
  }

  deleteComicMethod(): void {
    this.deleteComic.emit(this.index);
  }

  editComicMethod(): void {
    this.editComic.emit(this.index);
  }

  // editComicSubmit(): void {
  //   this.comic.hero = this.hero.nativeElement.value;
  //   this.comic.image = this.image.nativeElement.value;
  //   this.comic.name = this.name.nativeElement.value;
  // }

  constructor() { }

  ngOnInit(): void {
    // this.heroBox = this.comic.hero;
    // this.imageBox = this.comic.image;
    // this.nameBox = this.comic.name;
  }

}
