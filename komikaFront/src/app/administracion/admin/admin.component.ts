import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../servicios/comics.service';
import { Comic } from '../../models/comics.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  arrComics: Comic[];

  constructor(private comicsService: ComicsService) { }

  async ngOnInit() {
    this.arrComics = await this.comicsService.getAll();
  }


  async onDelete(pId) {
    console.log(pId);
    await this.comicsService.deleteComic(pId);
    window.location.reload();
  }






}
