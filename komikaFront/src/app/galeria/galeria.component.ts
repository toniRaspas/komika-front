import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../servicios/comics.service';
import { Comic } from '../models/comics.model';
//import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  arrComics: Comic[];
  cat: string;
  words: string;



  constructor(private comicsService: ComicsService) {

  }

  async ngOnInit() {
    this.arrComics = await this.comicsService.getAll();
  }

  onChange($event) {
    console.log($event.target.value);

    if ($event.target.value != '') {
      this.comicsService.getByCat($event.target.value)
        .then(arrComicsCat => {
          this.arrComics = arrComicsCat; console.log(arrComicsCat);
        })
    } else { this.comicsService.getAll().then(arrComicsReturn => { this.arrComics = arrComicsReturn }) }
  }

  onChangeWords($event) {
    if ($event.target.value != '') {
      this.comicsService.getByWords($event.target.value)
        .then(arrComicsCat => { this.arrComics = arrComicsCat; })
    } else { this.comicsService.getAll().then(arrComicsReturn => { this.arrComics = arrComicsReturn }) }
  }

  //getByBoth
  onBoth(cat, words) {
    if (cat == '' && words != '') {
      this.comicsService.getByWords(words)
        .then(arrComicsFil => {
          this.arrComics = arrComicsFil;
        })
    } else if (cat != '' && words == '') {
      this.comicsService.getByCat(cat)
        .then(arrComicsFil => {
          this.arrComics = arrComicsFil;
        })
    } else if (cat != '' && words != '') {
      this.comicsService.getByBoth(cat, words)
        .then(arrComicsFil => {
          this.arrComics = arrComicsFil;
        })
    }
    else {
      this.comicsService.getAll().then(arrComicsFil => { this.arrComics = arrComicsFil })

    }
  }
}

