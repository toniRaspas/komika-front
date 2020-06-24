import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../servicios/comics.service';
import { Comic } from '../models/comics.model';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent implements OnInit {
  id: string;
  linkArchivo: Comic[];
  arrDescripcion: Comic[];
  url: string;

  constructor(private activateRoute: ActivatedRoute, private comicsService: ComicsService) {

    this.id;
    this.url;
  }
  async ngOnInit() {



    this.activateRoute.params.subscribe((params) => {
      const idesVarios = params.idComic;
      this.id = idesVarios;
    });

    this.arrDescripcion = await this.comicsService.getByDescription(this.id);


    this.comicsService.viewById(this.id).then(arrViewId => {
      this.linkArchivo = arrViewId;
      console.log(this.linkArchivo);

    });

  }





}
























