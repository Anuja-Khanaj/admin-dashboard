import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {


    
  sales:any[] = [];
  dataService :DataService = inject(DataService)

  ngOnInit(){
    this.sales = this.dataService.getOrder();
  }
}
