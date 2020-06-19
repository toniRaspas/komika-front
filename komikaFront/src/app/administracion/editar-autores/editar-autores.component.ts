import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoresService } from 'src/app/servicios/autores.service';
import { Autor } from 'src/app/models/autores.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-autores',
  templateUrl: './editar-autores.component.html',
  styleUrls: ['./editar-autores.component.css']
})
export class EditarAutoresComponent implements OnInit {

  autor: Autor;
  id: number;
  editForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private autoresService: AutoresService,
    private router: Router) {
    this.editForm = new FormGroup({
      'nombre': new FormControl(''),
      'biografia': new FormControl('')
    });
  }

  async ngOnInit() {
    var id;
    this.activatedRoute.params.subscribe((params) => {
      id = params.autorId;
    });
    this.autor = await this.autoresService.getAutorById(id);

    this.editForm = new FormGroup({
      'nombre': new FormControl(this.autor[0].nombre),
      'biografia': new FormControl(this.autor[0].biografia)
    });

  }


  async onSubmit() {
    let editedAutor = this.editForm.value;
    var id;
    this.activatedRoute.params.subscribe((params) => {
      id = params.autorId;
    });
    await this.autoresService.editAutor(id, editedAutor);
    this.router.navigate(['/admin/autores/']);


  }



}
