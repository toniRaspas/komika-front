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


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AccesoGuard] },
<<<<<<< HEAD
  { path: 'galeria', component: GaleriaComponent, canActivate: [AccesoGuard] },
  { path: 'view', component: VisualizadorComponent, canActivate: [AccesoGuard] },
  { path: 'admin', component: AdminComponent },
  { path: 'editar/:comicId', component: EditarComponent },
=======
  {
    path: 'galeria', component: GaleriaComponent, canActivate: [AccesoGuard]
  },
  {
    path: 'galeria/view/:idComic', component: VisualizadorComponent
  },
>>>>>>> master
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
