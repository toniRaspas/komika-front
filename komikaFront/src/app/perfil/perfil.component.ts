import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../models/usuarios.model';
import { Comic } from '../models/comics.model';
import { Indice } from '../models/indices.model'
import { ComicsService } from '../servicios/comics.service';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [NgbRatingConfig]
})

export class PerfilComponent implements OnInit {


  arrUser: Usuario;
  arrComics: Comic[];
  arrIndex: any;
  arrRead: any;
  arrReading: any;
  foto: string;
  ctrl: any;




  constructor(private usersService: UsuariosService, private comicsService: ComicsService, config: NgbRatingConfig) {

    this.arrIndex = [];
    this.arrRead = [];
    this.arrReading = [];
    this.ctrl = [];
    this.arrUser;
    this.arrComics = [];




  }


  async ngOnInit() {

    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);

    if (this.arrUser.foto === null || this.arrUser.foto === '') { this.foto = '../../assets/images/profile.png'; }
    else { this.foto = this.arrUser.foto; }
    console.log(this.arrUser);

    const id = this.arrUser.id;
    this.arrIndex = await this.comicsService.indexByUser(id);

    this.arrRead = await this.arrIndex.filter(comic => comic.estado == 'leido');
    this.arrReading = await this.arrIndex.filter(comic => comic.estado == 'leyendo');


  }

  /*
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
HAY QUE BORRAR ESTA MIERDA*/


  async onDelete($event) {

    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);
    const idUser = this.arrUser.id;
    const idComic = $event.target.value;
    this.arrIndex = await this.comicsService.deleteByFks(idUser, idComic);


    window.location.reload();

  }
  async pointing(id, $event) {

    const email = localStorage.getItem('userEmail');
    console.log(email);

    this.arrUser = await this.usersService.getUserByEmail(email);
    const idUser = this.arrUser.id
    const ctrl1 = $event.target.value;
    console.log(ctrl1);

    this.arrIndex = await this.comicsService.updatePoints(idUser, id, ctrl1)
    const retorno = await this.arrIndex;
    console.log(retorno);




  }

}

