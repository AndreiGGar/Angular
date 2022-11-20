import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Serie } from '../../models/serie';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  public series!: Serie;
  public id!: any;

  constructor(private _service: SeriesService, private _activeRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        this.id = parseInt(params['id']);
        this._service.getSerieById(this.id).then((response: any) => {
          this.series = response;
        });
      }
    });
  }

}
