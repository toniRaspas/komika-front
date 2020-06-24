import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../servicios/comics.service';
import { Comic } from '../models/comics.model';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../models/usuarios.model';



@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent implements OnInit {
  id: string;
  //idUser: string
  arrComics: Comic[];
  arrUser: Usuario[];
  
  
  constructor(private activateRoute: ActivatedRoute, private comicsService: ComicsService, private usersService: UsuariosService) {

    this.id;
    
    //this.idUser
  }
  ngOnInit(): void {
       
    const userid = localStorage.getItem('userId')
    console.log(userid);
    
    this.activateRoute.params.subscribe((params) => {
      const idesVarios = params.idComic;
      this.id = idesVarios;
      });
      const email = localStorage.getItem('userEmail'); 
          
      this.comicsService.viewById(this.id).then(arrViewId =>{this.arrComics = arrViewId;
        console.log(arrViewId);  
        this.usersService.getUserByEmail(email).then(userId =>{this.arrUser = userId;
        console.log(userId.id);
        this.comicsService.createByFks(userId.id, this.id)
        
        })
        
      })
      
      
      
      
   



      
      
      
        
  }
 
  }

  
 
  /*
     const email = localStorage.getItem('userEmail');
      this.arrUser = await this.usersService.getUserByEmail(email);
      console.log(this.arrUser);
      const id = this.arrUser.id;
*/



  /*
    ngOnInit(): void {
      this.activateRoute.params.subscribe((params) => {
        console.log(params.idComic);
  
        // const archivo = recComic(params.idComic)
      })
  */
  /*recComic(pComic){
    this.comicsService.viewById(pComic)
  }
*/





















