import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-comicsadd',
  templateUrl: './comicsadd.component.html',
  styleUrls: ['./comicsadd.component.css'],
})
export class ComicsaddComponent implements OnInit {
  public comics!: Comic[];

  constructor(private _service: ComicsService) {}

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

}
