import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';

/***
 * =========================
 *  SERVICES
 * ==========================
*/
import { GraficoService } from 'src/app/service/grafico.service';
import { WebSocketService } from '../../service/web-socket.service';
import { RestService } from '../../service/rest.service';

// ======================
// interfaces
// ======================

import { Lugar } from '../../../interface/lugares';

declare let google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  map: google.maps.Map;

  plagasResp: [] = [];
  plaga: string;

  public barChartLabels: Label[] = [ 'pulgon', 'hormigas', 'Insectos', 'Otras'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // tslint:disable-next-line:variable-name

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Series A' }
  ];

  marcadores: google.maps.Marker[] = [];

  lugares: Lugar[] = [
    {
      nombre: 'Udemy',
      lat: 37.784679,
      lng: -122.395936
    },
    {
      nombre: 'Bahía de San Francisco',
      lat: 37.798933,
      lng: -122.377732
    },
    {
      nombre: 'The Palace Hotel',
      lat: 37.788578,
      lng: -122.401745
    }
  ];

  // tslint:disable-next-line:variable-name
  constructor( public Gservices: GraficoService,
               public wService: WebSocketService,
               // tslint:disable-next-line:no-shadowed-variable
               public RestService: RestService ) {
    this.escucharSocket();
  }

  ngOnInit() {
    this.cargarMapa();
    this.agregar();
  }

  cargarMapa() {

    const latLng = new google.maps.LatLng( 37.784679, -122.395936 );

    const mapaOptions: google.maps.MapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapaOptions );
    for ( const lugar of this.lugares ) {
           this.agregarMarcador( lugar );
    }
  }


  agregarMarcador( marcador: Lugar ) {
    const latLng = new google.maps.LatLng( marcador.lng, marcador.lng );

   /* const marker = new google.maps.Marker({
      map: this.map,
      position:  latLng
    });
*/
    const marker = new google.maps.Marker({
      map: this.map,
      position: latLng
    });

    this.marcadores.push(marker);
  }

  agregar() {
    this.Gservices.getData()
    .subscribe( (resp: any) => {
      this.barChartData = resp;
     });
  }

escucharSocket() {
  this.wService.escuchar('cambio-grafica')
  .subscribe( (data: any) => {
    this.barChartData = data;
   });

}



agregarPlaga( valor: NgForm ) {
  this.RestService.getPlaga(valor.value)
    .subscribe( (data: any ) => {
      console.log( data[0].data );
      this.plagasResp = data[0].data;
     });
    }



    }
