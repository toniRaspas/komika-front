import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { VisualizadorComponent } from './visualizador/visualizador.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'view', component: VisualizadorComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
