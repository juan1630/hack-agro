import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TiendaComponent } from './component/tienda/tienda.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MapaComponent } from './component/mapa/mapa.component';
import { ChartsModule } from 'ng2-charts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// servicios
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './component/login/login.component';
import { GraficoComponent } from './component/grafico/grafico.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TiendaComponent,
    DashboardComponent,
    HomeComponent,
    MapaComponent,
    LoginComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
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
