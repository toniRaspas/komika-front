import { Component } from '@angular/core';
import { UsuariosService } from './servicios/usuarios.service';
import { Router } from '@angular/router';
import { } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Komika';
  arrRutas: any[];
  baseUrl: string;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.baseUrl = "http://localhost:4200/"
    this.arrRutas = ['/home', '/registro'];
  }


  ngOnInit() {
    this.checkRoute();

  };


  checkRoute() {
    this.router.events.subscribe((val) => {
      this.arrRutas.find(element => element === val);
    });
  };



  async logOut() {
    await this.usuariosService.deleteEmail();
    await this.usuariosService.deleteToken();
    this.router.navigate(['/home/']);
  }





}
