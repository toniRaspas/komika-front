import { Injectable } from '@angular/core';
import { Comic } from '../models/comics.model';
import { Autor } from '../models/autores.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  comics: Comic[];
  autores: Autor[];
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/comics';
  }

  getAll(): Promise<any> {
    return this.httpClient.get(this.baseUrl).toPromise();
  }






}
