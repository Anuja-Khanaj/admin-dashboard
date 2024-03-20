import { Component, ViewChild } from '@angular/core';
// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexTitleSubtitle
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   title: ApexTitleSubtitle;
// };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public chartOptions: any = {
    series: [{
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    chart: {
      height: 350,
      type: 'line',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
