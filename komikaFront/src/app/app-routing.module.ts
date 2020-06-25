import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { VisualizadorComponent } from './visualizador/visualizador.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminComponent } from './administracion/admin/admin.component';


import { AccesoGuard } from './guards/acceso.guard';
import { AdminGuard } from './guards/admin.guard';
import { EditarComponent } from './administracion/editar/editar.component';
import { AdminGeneralComponent } from './administracion/admin-general/admin-general.component';
import { AutoresComponent } from './administracion/autores/autores.component';
import { EditarAutoresComponent } from './administracion/editar-autores/editar-autores.component';
import { CrearComicComponent } from './administracion/crear-comic/crear-comic.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AccesoGuard] },
  { path: 'perfil/editar/:idUsuario', component: EditarPerfilComponent, canActivate: [AccesoGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'galeria', component: GaleriaComponent, canActivate: [AccesoGuard] },
  { path: 'galeria/view/:idComic', component: VisualizadorComponent, canActivate: [AccesoGuard] },


  { path: 'admin', component: AdminGeneralComponent, canActivate: [AccesoGuard, AdminGuard] },
  { path: 'admin/comics', component: AdminComponent, canActivate: [AccesoGuard, AdminGuard] },
  { path: 'admin/comics/crear', component: CrearComicComponent, canActivate: [AccesoGuard, AdminGuard] },
  { path: 'comics/editar/:comicId', component: EditarComponent, canActivate: [AccesoGuard, AdminGuard] },
  { path: 'admin/autores', component: AutoresComponent, canActivate: [AccesoGuard, AdminGuard] },
  { path: 'autores/editar/:autorId', component: EditarAutoresComponent, canActivate: [AccesoGuard, AdminGuard] },


  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
