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
  //visualizador: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/comics';
  }

  getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.get(this.baseUrl).toPromise());
    });
  };

  getComicById(pId): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.get(this.baseUrl + '/' + pId).toPromise());
    });
  }

  ////////////filtros galeria////////////
  getByCat(cat: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const urlFil = this.baseUrl + '/categoria/' + cat;
      resolve(this.httpClient.get(urlFil).toPromise())
    });
  };

  getByWords(words: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const urlFil = this.baseUrl + '/titulo/' + words;
      resolve(this.httpClient.get(urlFil).toPromise())
    });
  };

  getByBoth(cat: string, words: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const urlFil = this.baseUrl + '/filter/' + cat + '/' + words;
      resolve(this.httpClient.get(urlFil).toPromise())
    });
  };

  deleteComic(pId): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.delete(this.baseUrl + '/' + pId).toPromise());
    });
  };

  viewById(id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const urlPdf = this.baseUrl + '/pdf/' + id; resolve(this.httpClient.get(urlPdf).toPromise())
    })
  }

}



