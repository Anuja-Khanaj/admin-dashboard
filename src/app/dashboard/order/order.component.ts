import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  sales = [
    {
      "Amount": "$500",
      "Product": "Laptop",
      "Organisation": "XYZ Company",
      "Date": "2024-03-18",
      "status": "order placed "
    },
    {
      "Amount": "$300",
      "Product": "Smartphone",
      "Organisation": "ABC Inc.",
      "Date": "2024-03-18",
      "status": "order placed "
    },
    {
      "Amount": "$700",
      "Product": "Television",
      "Organisation": "DEF Corp.",
      "Date": "2024-03-19",
      "status": "order placed"
    },
    {
      "Amount": "$200",
      "Product": "Headphones",
      "Organisation": "GHI Ltd.",
      "Date": "2024-03-19",
      "status": "order placed "
    },
    {
      "Amount": "$400",
      "Product": "Tablet",
      "Organisation": "JKL Enterprises",
      "Date": "2024-03-18",
      "status": "order placed "
    },
    {
      "Amount": "$600",
      "Product": "Camera",
      "Organisation": "MNO Corporation",
      "Date": "2024-03-19",
      "status": "order placed" 
    }
  ]
}
