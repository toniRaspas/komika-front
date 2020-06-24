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

  itemsPerSlide = 3;
  singleSlideOffset = true;

  arrUser: Usuario;
  arrComics: Comic[];
  arrIndex: any;
  arrRead: any;
  arrReading: any;
  perfil: string;


  constructor(private usersService: UsuariosService, private comicsService: ComicsService) {

    this.arrIndex = [];
    this.arrRead = [];
    this.arrReading = [];
    this.perfil = '../../assets/images/profile.png'

  }


  async ngOnInit() {

    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);

    if (this.arrUser.foto === null) { this.arrUser.foto === this.perfil };

    const id = this.arrUser.id;
    this.arrIndex = await this.comicsService.indexByUser(id);
    this.arrRead = await this.arrIndex.filter(comic => comic.estado == 'leido');
    this.arrReading = await this.arrIndex.filter(comic => comic.estado == 'leyendo');

  }




  async onDelete($event) {

    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);
    const idUser = this.arrUser.id;
    const idComic = $event.target.value;
    this.arrIndex = await this.comicsService.deleteByFks(idUser, idComic);

    window.location.reload();

  }








}
