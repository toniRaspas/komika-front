import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/models/comics.model';
import { ComicsService } from 'src/app/servicios/comics.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  comic: Comic;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private comicsService: ComicsService) { }

  async  ngOnInit() {
    var id;
    this.activatedRoute.params.subscribe((params) => {
      id = params.comicId;
    });
    this.comic = await this.comicsService.getComicById(id);
  }


}
