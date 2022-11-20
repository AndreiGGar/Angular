import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  series!: Serie[];

  constructor(private SeriesService: SeriesService) {
  }

  getSeries() {
    this.SeriesService.getSeries().then((response: any) => {
      this.series = response;
    });
  }

  ngOnInit(): void {
    this.getSeries();
  }
}
