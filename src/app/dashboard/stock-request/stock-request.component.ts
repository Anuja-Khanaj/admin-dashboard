import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-stock-request',
  templateUrl: './stock-request.component.html',
  styleUrls: ['./stock-request.component.css']
})
export class StockRequestComponent {
 
    
      
  sales:any[] = [];
  dataService :DataService = inject(DataService)

  ngOnInit(){
    this.sales = this.dataService.getRequests();
  }
  }
  

