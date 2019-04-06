import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { TiendaComponent } from './component/tienda/tienda.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MapaComponent } from './component/mapa/mapa.component';

// servicios
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './component/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PerfilComponent,
    TiendaComponent,
    DashboardComponent,
    HomeComponent,
    MapaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( routes, { useHash: false } ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCn2YA96kDTaKhTQePpEt8bpNf_9QVYJnU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
// tslint:disable-next-line:semicolon
})
export class AppModule { }
