import { Comic } from '../models/comic';
import { Injectable } from '@angular/core';

@Injectable()
export class ComicsService {
  getComics(): Comic[] {
    return [
      new Comic(
        'Batman',
        'https://eloutput.com/app/uploads-eloutput.com/2020/04/Batman.jpg',
        'Batman: The Killing Joke'
      ),
      new Comic(
        'Superman',
        'https://gcdn.lanetaneta.com/wp-content/uploads/2020/12/%C2%BFEs-Superman-lo-suficientemente-fuerte-como-para-vencer-a-Phoenix-780x470.jpg',
        'Superman: Red Son'
      ),
      new Comic(
        'Wonder Woman',
        'https://www.lavanguardia.com/files/image_948_465/uploads/2017/06/21/5fa3ce822922b.jpeg',
        'Mujer Maravilla: La Mujer de las Mil Batallas'
      ),
    ];
  }
}
