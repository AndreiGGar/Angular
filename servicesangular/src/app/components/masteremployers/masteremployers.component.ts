import { Component, OnInit } from '@angular/core';
import { EmployersService } from '../../services/employers.service';
import { Employer } from '../../models/employer';

@Component({
  selector: 'app-masteremployers',
  templateUrl: './masteremployers.component.html',
  styleUrls: ['./masteremployers.component.css']
})
export class MasteremployersComponent implements OnInit {
  public employers!: Employer[];
  
  constructor(private _service: EmployersService) { }

  loadEmployers() {
    this._service.getEmployers().then((response: any) => {
      this.employers = response;
    });
  }

  ngOnInit(): void {
    this.loadEmployers();
  }

}
