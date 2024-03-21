import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexTooltip,
  ApexPlotOptions,
  ApexResponsive,
  ApexTheme
} from "ng-apexcharts";
import { DataService } from '../Service/data.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  theme: ApexTheme;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any[] = [];
  dataservice: DataService;
  @ViewChild("chart") chart: ChartComponent;
  @ViewChild("chart2") chart2: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  sale :number
  torder:number
  trequest:number
  tinventory:number
  constructor(private dataService: DataService) {
    this.dataservice = dataService;
  }

  ngOnInit() {
    this.data = this.dataservice.getData();
    this.updateChart();
    // this.sale = this.dataService.getData().map(item => item + item.Amount)
  }

  updateChart() {
    const xcat = this.data.map(item => item.Product);
    const ycat = this.data.map(item => item.Amount);
  
      this.chartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: ycat
        }
      ],
      chart: {
        type: "area",
        height: 100,
        width: 120, 
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false,
        style: {
          fontSize: '1px',
          fontWeight: 'bold',
        },
      },
      stroke: {
        curve: "straight"
      },
      labels: xcat,
      xaxis: {
        type: "category",
        labels: {
          show: false 
        }
      },
      yaxis: {
        opposite: true,
        labels: {
          show: false 
        }
      },
      legend: {
        horizontalAlign: "right"
      }
    };
  
    // Chart options for the donut chart
    this.chartOptions2 = {
      series: ycat,
      chart: {
        width: "100%",
        type: "pie"
      },
      labels:xcat,
      theme: {
        monochrome: {
          enabled: true
        }
      },
      title: {
        text: "Number of leads"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
 
  }
