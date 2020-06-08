import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  //creamos una variable del tipo FormGroup
  registro: FormGroup;

  constructor() {

    //inicializamos dichas variables
    this.registro = new FormGroup({

      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      usuario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,
      Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]\w{8,30}$/)
      ]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registro.value);

  }
}
