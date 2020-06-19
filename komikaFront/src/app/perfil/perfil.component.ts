import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../models/usuarios.model'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  arrUser: Usuario;
  constructor(private usersService: UsuariosService) { }

  async ngOnInit() {
    const email = localStorage.getItem('userEmail');
    this.arrUser = await this.usersService.getUserByEmail(email);
    console.log(this.arrUser.foto);
  }

}
