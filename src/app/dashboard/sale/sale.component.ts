import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {

  
  sales:any[] = [];
  dataService :DataService = inject(DataService)

  ngOnInit(){
    this.sales = this.dataService.getData();
  }
  
}
