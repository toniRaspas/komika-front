import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autores.model';
import { AutoresService } from 'src/app/servicios/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  arrAutores: Autor[];

  constructor(private autoresService: AutoresService) {

  }

  async ngOnInit() {
    this.arrAutores = await this.autoresService.getAll();
  }

  async onDelete(pId) {
    await this.autoresService.deleteAutor(pId);
    window.location.reload();
  };




}
