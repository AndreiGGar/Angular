import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comic } from '../../models/comic';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent implements OnInit {
  public comics!: Comic[];
  public message!: string;
  @ViewChild('boxHero') hero!: ElementRef;
  @ViewChild('boxImage') image!: ElementRef;
  @ViewChild('boxName') name!: ElementRef;

  public heroBox!: any;
  public imageBox!: any;
  public nameBox!: any;
  public index!: any;

  constructor(private _service: ComicsService) {}

  selectFavorite(event: any): void {
    this.message = 'Favorite comic: ' + event;
  }

  deleteComic(event: any): void {
    this.comics.splice(event, 1);
  }

  editComic(event: any): void {
    this.heroBox = this.comics[event].hero;
    this.imageBox = this.comics[event].image;
    this.nameBox = this.comics[event].name;
    this.index = event;
  }

  editComicSubmit(): void {
    if (this.index !== null) {
      this.comics[this.index].hero = this.hero.nativeElement.value;
      this.comics[this.index].image = this.image.nativeElement.value;
      this.comics[this.index].name = this.name.nativeElement.value;
      (this.hero.nativeElement.value = ''),
        (this.image.nativeElement.value = ''),
        (this.name.nativeElement.value = '');
    }
    this.index = null;
  }

  insertComic(): void {
    var hero = this.hero.nativeElement.value;
    var image = this.image.nativeElement.value;
    var name = this.name.nativeElement.value;

    this.comics.push(new Comic(hero, image, name));
  }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }
}
