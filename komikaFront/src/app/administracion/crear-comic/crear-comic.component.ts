import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComicsService } from 'src/app/servicios/comics.service';

@Component({
  selector: 'app-crear-comic',
  templateUrl: './crear-comic.component.html',
  styleUrls: ['./crear-comic.component.css']
})
export class CrearComicComponent implements OnInit {

  url: string;
  file: File;
  nombreArchivo: string;
  createForm: FormGroup;


  constructor(private comicsService: ComicsService) {
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
    var storage = firebase.storage().ref(`/${file.name}/`);

    storage.put(file, metaData);
    this.nombreArchivo = file.name.split('.').shift();

    firebase.storage().ref().child(`/${file.name}/`).getDownloadURL().then((pUrl) => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.open('GET', pUrl);
      this.url = pUrl;

      console.log(this.url);



    }).catch((err) => {
      console.log(err);
    });


    console.log(this.url);

  };


  async  onSubmit() {

    this.createForm.value.archivo = this.url;
    let createComic = this.createForm.value;
    await this.comicsService.createComic(createComic);
  }


}
