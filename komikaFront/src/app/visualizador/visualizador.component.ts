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
  arrComics: Comic[];
  constructor(private activateRoute: ActivatedRoute, private comicsService: ComicsService) {

    this.id;
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      const idesVarios = params.idComic;
      this.id = idesVarios;
    });
    this.comicsService.viewById(this.id).then(arrViewId => {
    this.arrComics = arrViewId;
    });
  }




}
























