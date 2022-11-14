import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css'],
})
export class CollatzComponent implements OnInit {
  public number!: number;
  public numbers!: Array<any>;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {}

  collatz(): void {
    this.numbers = [];
    this.numbers.push(this.number);
    while (this.number != 1) {
      if (this.number % 2 == 0) {
        this.number = this.number / 2;
      } else {
        this.number = this.number * 3 + 1;
      }
      this.numbers.push(this.number);
    }
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['number'] != null) {
        this.number = parseInt(params['number']);
        this.collatz();
      }
    });
  }

  goToHome(): void{
    this._router.navigate(['/']);
  }
}
