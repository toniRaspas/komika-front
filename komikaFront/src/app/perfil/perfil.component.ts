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
  arrRead: any;
  arrReading: any;


  constructor(private usersService: UsuariosService, private comicsService: ComicsService) {

    this.arrIndex = [];
    this.arrRead = [];
    this.arrReading = [];

  }





  async ngOnInit() {
    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);
    console.log(this.arrUser);
    const id = this.arrUser.id;

    this.arrIndex = await this.comicsService.indexByUser(id);
    console.log(this.arrIndex)
    console.log(this.arrIndex.lenght);
    this.arrRead = await this.arrIndex.filter(comic => comic.estado == 'leido')
    console.log(this.arrRead);
    this.arrReading = await this.arrIndex.filter(comic => comic.estado == 'leyendo')



    // this.arrComics = await this.comicsService.getComicById(this.arrIndex.fk_comic);
    //console.log(this.arrComics);

    //this.arrComics = await this.comicsService.getComicById(caca);
  }

  async onDelete($event) {
    console.log($event.target.value);

    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);
    const idUser = this.arrUser.id;
    const idComic = $event.target.value;
    this.arrIndex = await this.comicsService.deleteByFks(idUser, idComic);
    console.log(this.arrIndex.lenght);

    window.location.reload();

  }








}
