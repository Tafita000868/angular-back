import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-tableau-statistic',
  templateUrl: './tableau-statistic.component.html',
  styleUrls: ['./tableau-statistic.component.scss']
})
export class TableauStatisticComponent implements OnInit {

  title = 'Tableau statistique de la consommation de donnes';
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = ["mois 1", "mois 2", "mois 3", "mois 4", "mois 5"];
  barChartType: ChartType = 'bar'; // 'pie'
  barChartLegend = true;
  barChartPlugins:any = {'backgroundColor': [
    "#FF6384",
    "#0a4577",
    "##fd0",
    "#E7E9ED",
    "#36A2EB"
  ]}
  public barChartColors: Color[] = [
    { backgroundColor: 'green' },
  ]

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 16, 46], label: 'Offre MORA' },
    { data: [4, 56, 19, 12, 30], label: 'Offre Internet' },
    { data: [71, 16, 56, 46, 20], label: 'FIRST' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
