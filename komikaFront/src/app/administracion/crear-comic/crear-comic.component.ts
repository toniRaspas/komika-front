import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComicsService } from 'src/app/servicios/comics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-comic',
  templateUrl: './crear-comic.component.html',
  styleUrls: ['./crear-comic.component.css']
})
export class CrearComicComponent implements OnInit {

  url: string;
  file: File;
  nombreArchivo: string;
  portada: string;
  createForm: FormGroup;


  constructor(
    private comicsService: ComicsService,
    private router: Router
  ) {
    {
      this.createForm = new FormGroup({
        'titulo': new FormControl(''),
        'autor': new FormControl(''),
        'dibujante': new FormControl(''),
        'ano': new FormControl((new Date()).toISOString().substring(0, 10)),
        'genero': new FormControl(''),
        'escuela': new FormControl(''),
        'editorial': new FormControl(''),
        'descripcion': new FormControl(''),
        'nombreArchivo': new FormControl(''),
        'linkFoto': new FormControl(''),
        'archivo': new FormControl('', [Validators.required]),
        'fk_autor': new FormControl('')
      });
    }


  }

  ngOnInit(): void {
  }

  uploadFile(event: any) {
    const file: File = event.target.files[0];
    console.log('Archivo seleccionado: ', file.type);

    const metaData = { 'contentType': file.type };
    var storage = firebase.storage().ref(`/comics/${file.name}/`);

    storage.put(file, metaData);
    this.nombreArchivo = file.name.split('.').shift();

    firebase.storage().ref().child(`/comics/${file.name}/`).getDownloadURL().then((pUrl) => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.open('GET', pUrl);
      this.url = pUrl;

    }).catch((err) => {
      console.log(err);
    });
  };


  uploadPortada(event: any) {
    const file: File = event.target.files[0];
    console.log('Portada seleccionada: ', file.type);

    const metaData = { 'contentType': file.type };
    var storage = firebase.storage().ref(`/portadas/${file.name}/`);

    storage.put(file, metaData);
    this.nombreArchivo = file.name.split('.').shift();

    firebase.storage().ref().child(`/portadas/${file.name}/`).getDownloadURL().then((pUrl) => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.open('GET', pUrl);
      this.portada = pUrl;

    }).catch((err) => {
      console.log(err);
    });
  };

  async  onSubmit() {

    this.createForm.value.archivo = this.url;
    this.createForm.value.linkFoto = this.portada;
    let createComic = this.createForm.value;
    await this.comicsService.createComic(createComic);
    this.router.navigate(['/admin/comics/']);
  }


}
