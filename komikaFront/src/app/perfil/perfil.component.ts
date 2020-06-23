import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../models/usuarios.model';
import { Comic } from '../models/comics.model';
import { Indice } from '../models/indices.model'
import { ComicsService } from '../servicios/comics.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  arrUser: Usuario;
  arrComics: Comic[];
  arrIndex: any;


  constructor(private usersService: UsuariosService, private comicsService: ComicsService) {

  }





  async ngOnInit() {
    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);
    const id = this.arrUser.id;
    this.arrIndex = await this.comicsService.indexByUser(id);


  }







}
