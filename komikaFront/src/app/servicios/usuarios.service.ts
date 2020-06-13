import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Usuario[];

  constructor() {
    this.usuarios = [];
  }
}
