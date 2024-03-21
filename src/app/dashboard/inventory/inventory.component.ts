import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  // sales = [
  //   {
  //     "Amount": "$500",
  //     "Product": "Laptop",
  //     "Organisation": "XYZ Company",
  //     "Date": "2024-03-18",
  //     "City": "New York"
  //   },
  //   {
  //     "Amount": "$300",
  //     "Product": "Smartphone",
  //     "Organisation": "ABC Inc.",
  //     "Date": "2024-03-18",
  //     "City": "Los Angeles"
  //   },
  //   {
  //     "Amount": "$700",
  //     "Product": "Television",
  //     "Organisation": "DEF Corp.",
  //     "Date": "2024-03-19",
  //     "City": "Chicago"
  //   },
  //   {
  //     "Amount": "$200",
  //     "Product": "Headphones",
  //     "Organisation": "GHI Ltd.",
  //     "Date": "2024-03-19",
  //     "City": "Houston"
  //   },
  //   {
  //     "Amount": "$400",
  //     "Product": "Tablet",
  //     "Organisation": "JKL Enterprises",
  //     "Date": "2024-03-18",
  //     "City": "San Francisco"
  //   },
  //   {
  //     "Amount": "$600",
  //     "Product": "Camera",
  //     "Organisation": "MNO Corporation",
  //     "Date": "2024-03-19",
  //     "City": "Miami"
  //   }
  // ]

    
  sales:any[] = [];
  dataService :DataService = inject(DataService)

  ngOnInit(){
    this.sales = this.dataService.getInventory();
  }
}
