
import { NgModule, Component, OnInit } from '@angular/core';
import { MapaServiceService } from '../../service/mapa-service.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Marcador } from '../../../interface/marcador.interface';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';
import { GraficoService } from 'src/app/service/grafico.service';
import { WebSocketService } from '../../service/web-socket.service';
import { RestService } from '../../service/rest.service';
import { Lugar } from '../../../interface/lugares';

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
  plaga: string;

  public barChartLabels: Label[] = [ 'pulgon', 'hormigas', 'Insectos', 'Otras'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // tslint:disable-next-line:variable-name

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Series A' }
  ];

  // tslint:disable-next-line:variable-name
  constructor( public _ms: MapaServiceService,
               public Gservices: GraficoService,
               public wService: WebSocketService,
               // tslint:disable-next-line:no-shadowed-variable
               public RestService: RestService ) {
    _ms.cargarMarcadores();
  }

  ngOnInit() {
    this.agregar();
    this.escucharSocket();
  }


  agregar() {
    this.Gservices.getData()
    .subscribe( (resp: any) => {
      this.barChartData = resp;
     });
  }

  clickMap( evento ) {

    const nuevoMarcdor: Marcador = {
        lat: evento.coords.lat,
        lng: evento.coords.lng,
        titulo: 'Sin titulo',
        draggable: true,
        des: 'Hormigas'
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

escucharSocket() {
  this.wService.escuchar('cambio-grafica')
  .subscribe( (data: any) => {
    console.log(data);
    this.barChartData = data;
   });

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


agregarPlaga( valor: NgForm ) {
  this.RestService.getPlaga(valor.value)
    .subscribe( (data: any ) => {
      console.log(data);
     });
    }

    agregarMarcador( marcador: Lugar ) {

    }
    }

