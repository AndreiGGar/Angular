import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Character } from '../../models/character';
import { CharactersService } from '../../services/characters.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-series',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public characters!: Character[];
  public id!: any;

  constructor(private _service: CharactersService, private _activeRoute: ActivatedRoute, private _router: Router) { }

  deleteCharacter(idDelete: number) {
    const bootstrapSwal = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger mx-2',
        cancelButton: 'btn btn-secondary mx-2'
      },
      buttonsStyling: false
    })
    bootstrapSwal.fire({
      title: 'Are you sure deleting the character with id: ' + idDelete + '?',
      text: "Changes cannot be reversed.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'No, cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.deleteCharacter(idDelete).then((response: any) => {
          this.getChars();
        });
        Swal.fire(
          'Deleted!',
          'The character has been successfully deleted.',
          'success',
        )
      }
    })
  }

  getChars() {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        this.id = parseInt(params['id']);
        this._service.getCharactersById(this.id).then((response: any) => {
          this.characters = response;
        });
      }
    });
  }

  ngOnInit(): void {
    this.getChars();
  }

}
