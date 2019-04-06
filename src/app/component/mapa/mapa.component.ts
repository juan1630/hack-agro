import {  OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { MapaServiceService } from '../../service/mapa-service.service';

import { Marcador } from '../../../interface/marcador.interface';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  lat = 18.812521;
  lng = -98.954329;
  zoom = 16;
  marcadorSel: any = null;
  draggable = '1';

  // tslint:disable-next-line:variable-name
  constructor( public _ms: MapaServiceService ) {
    _ms.cargarMarcadores();
  }

  ngOnInit() {
  }

  clickMap( evento ) {

    const nuevoMarcdor: Marcador = {
        lat: evento.coords.lat,
        lng: evento.coords.lng,
        titulo: 'Sin titulo',
        draggable: true,
        des: 'Centros'
      };
    this._ms.insertarMarcador(nuevoMarcdor);
    }

  clickMarcador( marcador: Marcador, i: number ) {
    console.log(marcador, i);
    this.marcadorSel = marcador;

    if (this.marcadorSel.draggable) {
      this.draggable = '1';
    } else {
      this.draggable = '0';
    }

}


dragEndMarcador( marcador: Marcador, evento ) {
  const lat = evento.coords.lat;
  const lng = evento.coords.lng;

  marcador.lat = lat;
  marcador.lng = lng;

  // actualzamos las coordenadas

  this._ms.guardaMarcadores();

}

cambiarDraggable() {
  console.log(this.draggable);

  if ( this.draggable === '1') {
    this.marcadorSel.draggable = true;
  } else {
    this.marcadorSel.draggable = false;
  }
}


}
