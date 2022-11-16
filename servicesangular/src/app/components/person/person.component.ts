import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  public people!: Array<Person>;

  constructor(private _service: PersonService) {}

  ngOnInit(): void {
    this._service.getPersonas().then((response) => {
      this.people = response;
    });
    // this._service.getPersonas().subscribe((response) => {
    //   this.people = response;
    // });
  }
}
