import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../servicios/comics.service';
import { Comic } from '../models/comics.model';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../models/usuarios.model';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css'],
  providers: [NgbRatingConfig]
})
export class VisualizadorComponent implements OnInit {
  id: string;
  arrComics: Comic[];
  arrUser: Usuario;
  arrIndex: any;
  pagina: any;
  linkArchivo: Comic[];
  arrDescripcion: Comic[];
  url: string;
  puntuacion: any;

  constructor(private activateRoute: ActivatedRoute, private comicsService: ComicsService, private usersService: UsuariosService, config: NgbRatingConfig) {

    this.id;
    this.arrIndex = [];
    this.pagina = [];
    this.url;
    this.puntuacion;
    config.max = 5;
    config.readonly = true;
  }

  async ngOnInit() {

    this.activateRoute.params.subscribe((params) => {
      const idesVarios = params.idComic;
      this.id = idesVarios;
    });
    const email = localStorage.getItem('userEmail');

    this.comicsService.viewById(this.id).then(arrViewId => {
      this.arrComics = arrViewId;
      this.usersService.getUserByEmail(email).then(userId => {
        this.arrUser = userId;
        this.comicsService.createByFks(userId.id, this.id)
        this.comicsService.getPag(userId.id, this.id).then(pag => {
          this.pagina = pag;


        });
      });
    });

    //RECUPERAR DESCRIPCION Y LINK ARCHIVO
    this.arrDescripcion = await this.comicsService.getByDescription(this.id);

    this.comicsService.viewById(this.id).then(arrViewId => {
      this.linkArchivo = arrViewId;
    });
    this.puntuacion = await this.comicsService.getAvg(this.id)
    console.log(this.puntuacion);

  };

  async savePage($event) {

    this.activateRoute.params.subscribe((params) => {
      const idesVarios = params.idComic;
      this.id = idesVarios;
    });

    ///////////////////////////////////////////////
    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);
    const fkUser = this.arrUser.id;

    ////////////////////////////////////

    this.arrIndex = await this.comicsService.updatePag(fkUser, this.id, $event);

    const pgs = await this.comicsService.getPag(fkUser, this.id);
    this.pagina = pgs;
  }

  async changeStatus($event) {

    this.activateRoute.params.subscribe((params) => {
      const idesVarios = params.idComic;
      this.id = idesVarios;
    });

    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);
    const fkUser = this.arrUser.id;
    const pgs = await this.comicsService.getPag(fkUser, this.id);
    this.pagina = pgs;

    this.arrIndex = await this.comicsService.updateStatus(this.pagina.id, $event.target.value)

    const retorno = await this.comicsService.getPag(fkUser, this.id);
    this.pagina = retorno;
  }
}






























