import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-doublenumber',
  templateUrl: './doublenumber.component.html',
  styleUrls: ['./doublenumber.component.css'],
})
export class DoublenumberComponent implements OnInit {
  public number!: number;
  public double!: number;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['number'] != null) {
        this.number = parseInt(params['number']);
        this.double = this.number * 2;
      }
    });
  }

  redirect(n: number): void {
    this._router.navigate(['/doublenumber/', n]);
  }

  goToHome(): void{
    this._router.navigate(['/']);
  }
}
