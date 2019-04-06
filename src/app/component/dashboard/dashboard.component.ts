import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../service/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  climas: any [] = [];
  constructor( private clima: ClimaService ) {
    // tslint:disable-next-line:label-position
    this.clima.getClima()
    .subscribe( (data: any ) => {
      this.climas = data.list;
      console.log(this.climas);
    });
     }

  ngOnInit() {
  }

}
