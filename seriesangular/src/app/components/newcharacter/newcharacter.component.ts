import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Character } from '../../models/character';
import { CharactersService } from '../../services/characters.service';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../models/serie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './newcharacter.component.html',
  styleUrls: ['./newcharacter.component.css'],
})
export class NewcharacterComponent implements OnInit {
  public series!: Serie[];
  public character!: Character;
  @ViewChild('charName') name!: ElementRef;
  @ViewChild('charImage') image!: ElementRef;
  @ViewChild('charSerie') serie!: ElementRef;

  constructor(
    private _service: CharactersService,
    private _service2: SeriesService,
    private _router: Router
  ) {}

  getSeries() {
    this._service2.getSeries().then((response: any) => {
      this.series = response;
    });
  }

  newCharacter() {
    var idPersonaje = parseInt('0');
    var name = this.name.nativeElement.value;
    var image = this.image.nativeElement.value;
    var serie = parseInt(this.serie.nativeElement.value);

    this.character = new Character(idPersonaje, name, image, serie);
    console.log(this.character);
    this._service.newCharacter(this.character).then((response: any) => {
      this._router.navigate(['/characters/' + serie]);
    });
  }

  ngOnInit(): void {
    this.getSeries();
  }
}
