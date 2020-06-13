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

  /*
    getByCat(categoria): Promise<any> {
  
      return this.httpClient.get(this.baseUrl + this.categoria).toPromise();
    }
  
  */
  getByCat(cat: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const urlFil = this.baseUrl + '/' + cat;
      resolve(this.httpClient.get(urlFil).toPromise())
    });
  }
}

/*
      this.comics.filter(posteo => {
        const categoria = posteo.categoria.toLocaleLowerCase();
        const estaIncluido = categoria.includes(cat.toLocaleLowerCase());
        return estaIncluido;
      });
      resolve(arrFiltrado);
    });
  }
}

datos;
  // Seleccionamos o iniciamos el valor '0' del <select>
  opcionSeleccionado: string  = '';
  verSeleccion: string = '';

  constructor
  this.datos = [1,2,3,4,5,6,7,8,9,10]
  */