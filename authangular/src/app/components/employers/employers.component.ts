import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { EmployersService } from '../../services/employers.service';
import { Employer } from '../../models/employer';
import { User } from '../../models/user';

@Component({
  selector: 'app-series',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css'],
})
export class EmployersComponent implements OnInit {
  public employers!: Employer[];
  public token!: string | null;
  public user!: User;

  constructor(private _service: EmployersService, private _router: Router) {}

  showUser(): void{
    this.user = this._service.getUser();
  }

  getEmployers() {
    this._service.getEmployers(this.token).then((response: any) => {
      this.employers = response;
    });
  }

  ngOnInit(): void {
    this.token = this._service.getToken();
    this.showUser();
    this.getEmployers();
  }
}
