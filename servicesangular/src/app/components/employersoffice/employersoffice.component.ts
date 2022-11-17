import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployersService } from '../../services/employers.service';
import { Employer } from '../../models/employer';

@Component({
  selector: 'app-employersoffice',
  templateUrl: './employersoffice.component.html',
  styleUrls: ['./employersoffice.component.css']
})
export class EmployersofficeComponent implements OnInit {
  public employers!: Employer[];
  // public employersFilter!: Employer[];
  public offices!: string[];
  @ViewChild('office') office!: ElementRef;
  // @ViewChild('officeBox') officeBox!: ElementRef;

  constructor(private _service: EmployersService) { }

  searchEmployersOffice() {
    var office = this.office.nativeElement.value;
    this._service.getEmployersOffice(office).then((response: any) => {
      this.employers = response;
    });
  }

  // loadEmployers() {
  //   this._service.getEmployers().then((response: any) => {
  //     this.employers = response;
  //   });
  // }

  // searchEmployersBox() {
  //   this.employersFilter = this.employers;
  //   var office = this.officeBox.nativeElement.value;
  //   var employersBox = this.employersFilter.filter((employer: Employer) => employer.oficio === office);
  //   this.employersFilter = employersBox;
  //   if (this.employersFilter.length == 0) {
  //     alert('No hay empleados con ese oficio');
  //   }
  // }

  ngOnInit(): void {
    // this.loadEmployers();
    this._service.getOffices().then((response: any) => {
      this.offices = response;
    })
  }

}
