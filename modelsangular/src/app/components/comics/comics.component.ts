import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})

export class ComicsComponent implements OnInit {
  public comics: Array<Comic>;
  public message!: string;
  @ViewChild('boxHero') hero!: ElementRef;
  @ViewChild('boxImage') image!: ElementRef;
  @ViewChild('boxName') name!: ElementRef;

  public heroBox!: string;
  public imageBox!: string;
  public nameBox!: string;
  public index!: number;

  constructor() {
    this.comics = [
      new Comic(
        'Spiderman',
        'https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg',
        'Hombre araña'
      ),
      new Comic(
        'Wolverine',
        'https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg',
        'Lobezno'
      ),
      new Comic(
        'Guardianes de la Galaxia',
        'https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg',
        'Yo soy Groot'
      ),
      new Comic(
        'Avengers',
        'https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg',
        'Los Vengadores'
      ),
      new Comic(
        'Spawn',
        'https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png',
        'Todd MacFarlane'
      ),
    ];
  }

  selectFavorite(event: any): void {
    this.message = "Favorite comic: " + event;
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
    this.comics[this.index].hero = this.hero.nativeElement.value;
    this.comics[this.index].image = this.image.nativeElement.value;
    this.comics[this.index].name = this.name.nativeElement.value;
  }

  insertComic(): void {
    var hero = this.hero.nativeElement.value;
    var image = this.image.nativeElement.value;
    var name = this.name.nativeElement.value;

    this.comics.push(
      new Comic(
        hero,
        image,
        name
      )
    );
  }

  ngOnInit(): void {}
}
