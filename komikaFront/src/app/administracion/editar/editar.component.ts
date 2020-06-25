import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from 'src/app/models/comics.model';
import { ComicsService } from 'src/app/servicios/comics.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  comic: Comic;
  id: number;
  editForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private comicsService: ComicsService,
    private router: Router) {

    this.editForm = new FormGroup({
      'titulo': new FormControl(''),
      'autor': new FormControl(''),
      'dibujante': new FormControl(''),
      'ano': new FormControl((new Date()).toISOString().substring(0, 10)),
      'genero': new FormControl(''),
      'escuela': new FormControl(''),
      'editorial': new FormControl(''),
      'descripcion': new FormControl(''),
      'nombreArchivo': new FormControl(''),
      'linkFoto': new FormControl(''),
      'archivo': new FormControl('', [Validators.required]),
      'fk_autor': new FormControl('')
    });
  }

  async  ngOnInit() {
    var id;
    this.activatedRoute.params.subscribe((params) => {
      id = params.comicId;
    });
    this.comic = await this.comicsService.getComicById(id);

    this.editForm = new FormGroup({
      'titulo': new FormControl(this.comic[0].titulo),
      'autor': new FormControl(this.comic[0].autor),
      'dibujante': new FormControl(this.comic[0].dibujante),
      'ano': new FormControl(this.comic[0].ano),
      'genero': new FormControl(this.comic[0].genero),
      'escuela': new FormControl(this.comic[0].escuela),
      'editorial': new FormControl(this.comic[0].editorial),
      'descripcion': new FormControl(this.comic[0].descripcion),
      'nombreArchivo': new FormControl(this.comic[0].nombreArchivo),
      'linkFoto': new FormControl(this.comic[0].linkFoto),
      'archivo': new FormControl(this.comic[0].archivo, [Validators.required]),
      'fk_autor': new FormControl(this.comic[0].fk_autor)
    });
  }


  async onSubmit() {
    let editedComic = this.editForm.value;
    var id;
    this.activatedRoute.params.subscribe((params) => {
      id = params.comicId;
    });
    await this.comicsService.editComic(id, editedComic);
    this.router.navigate(['/admin/comics/']);

  }



}
