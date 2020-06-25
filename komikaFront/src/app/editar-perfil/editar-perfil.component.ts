import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../models/usuarios.model';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {


  editForm: FormGroup;
  foto: string;
  url: string;
  usuario: Usuario;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService) {

    this.editForm = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'usuario': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'foto': new FormControl('')
    });

  }

  async ngOnInit() {

    var id;
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      id = params.idUsuario;
    });
    this.usuario = await this.usuariosService.getUserById(id);


    this.editForm = new FormGroup({
      'nombre': new FormControl(this.usuario[0].nombre, [Validators.required]),
      'usuario': new FormControl(this.usuario[0].usuario, [Validators.required]),
      'email': new FormControl(this.usuario[0].email, [Validators.required, Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)]),
      'foto': new FormControl('')
    });
  }


  uploadFile(event: any) {
    const file: File = event.target.files[0];
    console.log('Archivo seleccionado: ', file.type);

    const metaData = { 'contentType': file.type };
    var storage = firebase.storage().ref(`/fotos/${file.name}/`);

    storage.put(file, metaData);
    this.foto = file.name.split('.').shift();

    firebase.storage().ref().child(`/fotos/${file.name}`).getDownloadURL().then((pUrl) => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.open('GET', pUrl);
      this.url = pUrl;

    }).catch((err) => {
      console.log(err);
    });
  };


  async onSubmit() {
    let editedUser = this.editForm.value;
    editedUser.foto = this.url;
    console.log(editedUser);
    var id;
    this.activatedRoute.params.subscribe((params) => {
      id = params.idUsuario;
    });
    await this.usuariosService.editUser(id, editedUser);
    this.router.navigate(['/perfil/']);
  }

}
