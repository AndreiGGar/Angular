import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Character } from '../../models/character';
import { CharactersService } from '../../services/characters.service';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../models/serie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './updatecharacter.component.html',
  styleUrls: ['./updatecharacter.component.css'],
})
export class UpdatecharacterComponent implements OnInit {
  public series!: Serie[];
  public characters!: Character[];
  public imgChar!: any;
  public imgSerie!: any;
  @ViewChild('boxChar') idChar!: ElementRef;
  @ViewChild('boxSerie') idSerie!: ElementRef;

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

  getCharacters() {
    this._service.getCharacters().then((response: any) => {
      this.characters = response;
    });
  }

  updateCharacter() {
    var idChar = parseInt(this.idChar.nativeElement.value);
    var idSerie = parseInt(this.idSerie.nativeElement.value);

    this._service.updateCharacter(idChar, idSerie).then((response: any) => {
      this._router.navigate(['/characters/' + idSerie]);
    });
  }

  getImgChars() {
    var idChar = parseInt(this.idChar.nativeElement.value);
    this.imgChar = this.characters[idChar - 1].imagen;
  }

  getImgSeries() {
    var idSerie = parseInt(this.idSerie.nativeElement.value);
    this.imgSerie = this.series[idSerie - 1].imagen;
  }

  ngOnInit(): void {
    this.getSeries();
    this.getCharacters();
  }
}
