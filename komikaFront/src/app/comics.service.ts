import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Usuarios } from './models/usuarios.model';
=======
import { Comic } from './models/comics.model';
import { Autor } from './models/autores.model';
>>>>>>> 2956665817453f08e362bb0364ee44863e2b9154

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

<<<<<<< HEAD
  usuarios: Usuarios[];

  constructor() {

    this.usuarios = [];


  }
=======
  comics: Comic[];
  autores: Autor[];

  constructor() { }
>>>>>>> 2956665817453f08e362bb0364ee44863e2b9154
}
