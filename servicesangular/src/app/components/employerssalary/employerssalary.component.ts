import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployersService } from '../../services/employers.service';
import { Employer } from '../../models/employer';

@Component({
  selector: 'app-employerssalary',
  templateUrl: './employerssalary.component.html',
  styleUrls: ['./employerssalary.component.css']
})
export class EmployerssalaryComponent implements OnInit {
  public employers!: Employer[];
  @ViewChild('salary') salary!: ElementRef;

  constructor(private _service: EmployersService) { }

  ngOnInit(): void {
    this._service.getEmployers().then((response: any) => {
      this.employers = response;
    });
  }

  showEmployersSalary() {
    var salary = this.salary.nativeElement.value;
    this._service.getEmployersSalary(salary).then((response: any) => {
      this.employers = response;
    });
  }

  // getOffices() {
  //   var offices = this.employers.map((employer: Employer) => employer.oficio);
  //   return offices.filter((office: string, index: number) => offices.indexOf(office) === index);
  // }

}
