import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../servicios/comics.service';
import { Comic } from '../models/comics.model';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../models/usuarios.model';


@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent implements OnInit {
  id: string;
  //idUser: string
  arrComics: Comic[];
  arrUser: Usuario;
  arrIndex: any;
  pagina: any;
  linkArchivo: Comic[];
  arrDescripcion: Comic[];
  url: string;




  constructor(private activateRoute: ActivatedRoute, private comicsService: ComicsService, private usersService: UsuariosService) {

    this.id;
    this.arrIndex = [];
    this.pagina = [];
    //this.idUser
    this.url;
  }
  async ngOnInit() {


    this.activateRoute.params.subscribe((params) => {
      const idesVarios = params.idComic;
      this.id = idesVarios;
    });
    const email = localStorage.getItem('userEmail');

    this.comicsService.viewById(this.id).then(arrViewId => {
      this.arrComics = arrViewId;
      console.log(arrViewId);
      this.usersService.getUserByEmail(email).then(userId => {
        this.arrUser = userId;
        console.log(userId.id);
        this.comicsService.createByFks(userId.id, this.id)
        this.comicsService.getPag(userId.id, this.id).then(pag => {
          this.pagina = pag;
          console.log(this.pagina.pagina);


        })



      })


    })
    this.arrDescripcion = await this.comicsService.getByDescription(this.id);


    this.comicsService.viewById(this.id).then(arrViewId => {
      this.linkArchivo = arrViewId;
      console.log(this.linkArchivo);

    });



  }

  async savePage($event) {
    console.log('hola cagarro')

    this.activateRoute.params.subscribe((params) => {
      const idesVarios = params.idComic;
      this.id = idesVarios;
    });

    ///////////////////////////////////////////////
    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);
    const fkUser = this.arrUser.id;
    console.log(fkUser);
    console.log(this.arrComics);


    ////////////////////////////////////

    this.arrIndex = await this.comicsService.updatePag(fkUser, this.id, $event);

    const pgs = await this.comicsService.getPag(fkUser, this.id);
    this.pagina = pgs;
    console.log(this.pagina.pagina);




  }




}


//updatePag(pUsuario, pComic, pPage)
/*
   const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);
    console.log(this.arrUser);
    const id = this.arrUser.id;
*/




























