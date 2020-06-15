import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuarios.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Usuario[];
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.usuarios = [];
    this.baseUrl = 'http://localhost:3000/users/';
  }

  registro(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}registro`, formValues).toPromise();
  }


  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}login`, formValues).toPromise();
  }





}
