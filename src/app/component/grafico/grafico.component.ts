import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [
    [100, 50, 90],
    [50, 10, 17],
    [20, 20, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor( ) { }

  ngOnInit() {
  }

}
