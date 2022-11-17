import { Component, OnInit } from '@angular/core';
import { EmployersService } from '../../services/employers.service';
import { Employer } from '../../models/employer';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detailsemployers',
  templateUrl: './detailsemployers.component.html',
  styleUrls: ['./detailsemployers.component.css']
})
export class DetailsemployersComponent implements OnInit {
  public employer!: Employer;
  public id!: any;

  constructor(private _service: EmployersService, private _activeRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        this.id = parseInt(params['id']);
        this._service.getEmployerById(this.id).then((response: any) => {
          this.employer = response;
        });
      }
    });
  }

}
