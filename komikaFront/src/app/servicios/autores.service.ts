import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autor } from '../models/autores.model';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  baseUrl: string;
  autores: Autor[];


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/autores';
  }

  getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.get(this.baseUrl).toPromise());
    });
  };


  deleteAutor(pId): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.delete(this.baseUrl + '/' + pId).toPromise());
    });
  };

  getAutorById(pId): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.get(this.baseUrl + '/' + pId).toPromise());
    });
  };

  editAutor(pId: number, pValues): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.put(this.baseUrl + '/edit/' + pId, pValues).toPromise());
    });
  };

}
