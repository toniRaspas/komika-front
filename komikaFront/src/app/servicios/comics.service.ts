import { Injectable } from '@angular/core';
import { Comic } from '../models/comics.model';
import { HttpClient } from '@angular/common/http';
import { Indice } from '../models/indices.model'



@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  comics: Comic[];
  baseUrl: string;
  indiceUrl: string;
  indice: Indice;
  //visualizador: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/comics';
    this.indiceUrl = 'http://localhost:3000/indices';

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

  getByDescription(pId): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(this.httpClient.get(this.baseUrl + '/descripcion/' + pId).toPromise());
    });
  }


  deleteComic(pId): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.delete(this.baseUrl + '/' + pId).toPromise());
    });
  };

  viewById(id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const urlPdf = this.baseUrl + '/pdf/' + id;
      resolve(this.httpClient.get(urlPdf).toPromise());
    });
  };

  editComic(pId: number, pValues): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.put(this.baseUrl + '/edit/' + pId, pValues).toPromise());
    });
  };

  indexByUser(pId: number): Promise<Indice> {
    return new Promise<any>((resolve, reject) => {
      const urlIndx = this.indiceUrl + '/' + pId;
      resolve(this.httpClient.get(urlIndx).toPromise())
    })
  }


  createByFks(pUsuario, pComic): Promise<Indice> {
    return new Promise<any>((resolve, reject) => {
      const urlPost = this.indiceUrl + '/tbi/' + pUsuario + '/' + pComic;
      resolve(this.httpClient.post(urlPost, {}).toPromise())
    })
  }

  deleteByFks(pUsuario, pComic): Promise<Indice> {
    return new Promise<any>((resolve, reject) => {
      const urlDelete = this.indiceUrl + '/delete/' + pUsuario + '/' + pComic;
      resolve(this.httpClient.delete(urlDelete, {}).toPromise())
    })
  }

  updatePag(pUsuario, pComic, pPage): Promise<Indice> {
    return new Promise<any>((resolve, reject) => {
      const urlPag = this.indiceUrl + '/page/' + pUsuario + '/' + pComic + '/' + pPage;
      resolve(this.httpClient.put(urlPag, {}).toPromise())
    })
  }

  getPag(pUsuario, pComic): Promise<Indice> {
    return new Promise<any>((resolve, reject) => {
      const urlAcc = this.indiceUrl + '/getpage/' + pUsuario + '/' + pComic;
      resolve(this.httpClient.get(urlAcc).toPromise())
    })
  }

  updateStatus(id, estado): Promise<Indice> {
    return new Promise<any>((resolve, reject) => {
      const urlStatus = this.indiceUrl + '/updatestatus/' + id + '/' + estado;
      resolve(this.httpClient.put(urlStatus, {}).toPromise())
    })
  }

  updatePoints(userId, comicId, puntuacion): Promise<Indice> {
    return new Promise<any>((resolve, reject) => {
      const urlStatus = this.indiceUrl + '/yourpoint/' + userId + '/' + comicId + '/' + puntuacion;
      resolve(this.httpClient.put(urlStatus, {}).toPromise())
    })
  }

  createComic(pValues): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.httpClient.post(this.baseUrl + '/create/', pValues).toPromise());
    });
  }
  getAvg(comicId): Promise<any> {
    return new Promise((resolve, reject) => { resolve(this.httpClient.get(this.indiceUrl + '/avg/' + comicId).toPromise()) })
  }
  getsIds(): Promise<any> { return new Promise((resolve, reject) => { resolve(this.httpClient.get(this.baseUrl + '/ideacos').toPromise()) }) }
}



