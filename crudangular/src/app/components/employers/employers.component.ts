import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployersService } from '../../services/employers.service';
import { Employer } from '../../models/employer';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
  public employers!: Employer[];
  public id!: any;

  constructor(private _service: EmployersService, private _activeRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        this.id = parseInt(params['id']);
        this._service.getEmployersDepartment(this.id).then((response: any) => {
          this.employers = response;
        });
      }
    });
  }

}
