import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: FormGroup;
  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required,
      Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]\w{8,30}$/)
      ])
    })
  }


  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const response = await this.usuariosService.login(this.login.value);

      console.log(response);

      if (response.success) {
        await this.usuariosService.createLocalToken(response.token);
        await this.usuariosService.retrieveLocalToken();
        this.router.navigate(['/galeria']);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
