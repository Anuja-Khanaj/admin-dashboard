import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-request',
  templateUrl: './stock-request.component.html',
  styleUrls: ['./stock-request.component.css']
})
export class StockRequestComponent {
 
    sales = [
      {
        "Amount": "$500",
        "Product": "Laptop",
        "Organisation": "XYZ Company",
        "Date": "2024-03-18",
        "status": "complete "
      },
      {
        "Amount": "$300",
        "Product": "Smartphone",
        "Organisation": "ABC Inc.",
        "Date": "2024-03-18",
        "status": "complete "
      },
      {
        "Amount": "$700",
        "Product": "Television",
        "Organisation": "DEF Corp.",
        "Date": "2024-03-19",
        "status": "complete"
      },
      {
        "Amount": "$200",
        "Product": "Headphones",
        "Organisation": "GHI Ltd.",
        "Date": "2024-03-19",
        "status": "pending "
      },
      {
        "Amount": "$400",
        "Product": "Tablet",
        "Organisation": "JKL Enterprises",
        "Date": "2024-03-18",
        "status": "complete "
      },
      {
        "Amount": "$600",
        "Product": "Camera",
        "Organisation": "MNO Corporation",
        "Date": "2024-03-19",
        "status": "complete" 
      }
    ]
  }
  

