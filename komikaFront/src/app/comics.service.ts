import { Injectable } from '@angular/core';
import { Usuarios } from './models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  usuarios: Usuarios[];

  constructor() {

    this.usuarios = [];


  }
}
