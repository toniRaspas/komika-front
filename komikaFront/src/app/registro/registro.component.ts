import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuarios.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  //creamos una variable del tipo FormGroup
  registro: FormGroup;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router) {

    //inicializamos dichas variables
    this.registro = new FormGroup({

      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'usuario': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required,
      Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]\w{8,30}$/)
      ]),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {

    const newUser: Usuario = this.registro.value;
    try {
      let response = await this.usuariosService.registro(newUser);
      response.error ? console.log(response.error) : this.createNewToken(newUser);
    }
    catch (err) {
      console.log(err);
    }
  }


  async createNewToken(pNewUser) {
    try {
      let response = await this.usuariosService.login(pNewUser);
      if (response.success) {
        await this.usuariosService.createLocalToken(response.token);
        await this.usuariosService.createLocalToken(response.token);
        await this.usuariosService.retrieveLocalToken();
        await this.usuariosService.createLocalEmail(response.email);
        await this.usuariosService.retrieveLocalEmail();
        this.router.navigate(['/galeria']);
      }
    } catch (err) {
      console.log(err);
    }
  }



}

