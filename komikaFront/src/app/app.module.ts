import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { VisualizadorComponent } from './visualizador/visualizador.component';
import { RegistroComponent } from './registro/registro.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AdminComponent } from './administracion/admin/admin.component';
import { EditarComponent } from './administracion/editar/editar.component';
import { AdminGeneralComponent } from './administracion/admin-general/admin-general.component';
import { AutoresComponent } from './administracion/autores/autores.component';
import { EditarAutoresComponent } from './administracion/editar-autores/editar-autores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent,
    GaleriaComponent,
    VisualizadorComponent,
    RegistroComponent,
    AdminComponent,
    EditarComponent,
    AdminGeneralComponent,
    AutoresComponent,
    EditarAutoresComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule

  ],
  providers: [
    { provide: BUCKET, useValue: 'gs://app-komika.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
