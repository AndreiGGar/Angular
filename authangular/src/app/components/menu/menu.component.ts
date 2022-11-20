import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employer } from '../../models/employer';
import { EmployersService } from '../../services/employers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public employers!: Employer[];
  public employersFilter!: Employer[];
  public token!: string | null;
  @ViewChild('search') search!: ElementRef;

  constructor(private _service: EmployersService, private _router: Router) {}

  getEmployers() {
    this._service.getEmployers(this.token).then((response: any) => {
      this.employers = response;
    });
  }

  logout() {
    this._service.deleteToken();
    window.location.href = '/login';
  }

  searchEmployerByJob() {
    // this._router.navigate(['/search', this.search.nativeElement.value]);
    this.employersFilter = [];
    var search = this.search.nativeElement.value;
    this.employersFilter = this.employers.filter((employer) => {
      return employer.oficio.toLowerCase().includes(search.toLowerCase());
    });
    console.log(this.employersFilter);
  }

  ngOnInit(): void {
    this.token = this._service.getToken();
    this.getEmployers();
  }
}
