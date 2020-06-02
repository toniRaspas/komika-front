import { Injectable } from '@angular/core';
import { Comic } from './models/comics.model';
import { Autor } from './models/autores.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  comics: Comic[];
  autores: Autor[];

  constructor() { }
}
