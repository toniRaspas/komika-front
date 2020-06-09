import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../servicios/comics.service';
import { Comic } from '../models/comics.model';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  arrComics: Comic[];

  constructor(private comicsService: ComicsService) { }

  async ngOnInit() {
    this.arrComics = await this.comicsService.getAll();
  }
}

