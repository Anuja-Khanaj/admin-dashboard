import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }
  sales = [
    {
      "Amount": "500",
      "Product": "Laptop",
      "Organisation": "XYZ Company",
      "Date": "2024-03-18",
      "City": "New York"
    },
    {
      "Amount": "300",
      "Product": "Smartphone",
      "Organisation": "ABC Inc.",
      "Date": "2024-03-18",
      "City": "Los Angeles"
    },
    {
      "Amount": "700",
      "Product": "Television",
      "Organisation": "DEF Corp.",
      "Date": "2024-03-19",
      "City": "Chicago"
    },
    {
      "Amount": "200",
      "Product": "Headphones",
      "Organisation": "GHI Ltd.",
      "Date": "2024-03-19",
      "City": "Houston"
    },
    {
      "Amount": "400",
      "Product": "Tablet",
      "Organisation": "JKL Enterprises",
      "Date": "2024-03-18",
      "City": "San Francisco"
    },
    {
      "Amount": "600",
      "Product": "Camera",
      "Organisation": "MNO Corporation",
      "Date": "2024-03-19",
      "City": "Miami"
    }
  ]

  orders = [
    {
      "Amount": "500",
      "Product": "Laptop",
      "Organisation": "XYZ Company",
      "Date": "2024-03-18",
      "status": "complete "
    },
    {
      "Amount": "300",
      "Product": "Smartphone",
      "Organisation": "ABC Inc.",
      "Date": "2024-03-18",
      "status": "complete "
    },
    {
      "Amount": "700",
      "Product": "Television",
      "Organisation": "DEF Corp.",
      "Date": "2024-03-19",
      "status": "complete"
    },
    {
      "Amount": "200",
      "Product": "Headphones",
      "Organisation": "GHI Ltd.",
      "Date": "2024-03-19",
      "status": "pending "
    },
    {
      "Amount": "400",
      "Product": "Tablet",
      "Organisation": "JKL Enterprises",
      "Date": "2024-03-18",
      "status": "complete "
    },
    {
      "Amount": "600",
      "Product": "Camera",
      "Organisation": "MNO Corporation",
      "Date": "2024-03-19",
      "status": "complete" 
    }
  ]
  requests= [
    {
      "Amount": "500",
      "Product": "Laptop",
      "Organisation": "XYZ Company",
      "Date": "2024-03-18",
      "status": "complete "
    },
    {
      "Amount": "300",
      "Product": "Smartphone",
      "Organisation": "ABC Inc.",
      "Date": "2024-03-18",
      "status": "complete "
    },
    {
      "Amount": "700",
      "Product": "Television",
      "Organisation": "DEF Corp.",
      "Date": "2024-03-19",
      "status": "complete"
    },
    {
      "Amount": "200",
      "Product": "Headphones",
      "Organisation": "GHI Ltd.",
      "Date": "2024-03-19",
      "status": "pending "
    },
    {
      "Amount": "400",
      "Product": "Tablet",
      "Organisation": "JKL Enterprises",
      "Date": "2024-03-18",
      "status": "complete "
    },
    {
      "Amount": "600",
      "Product": "Camera",
      "Organisation": "MNO Corporation",
      "Date": "2024-03-19",
      "status": "complete" 
    }
  ]
  inventory = [
    {
      "Amount": "5090",
      "Product": "Laptop",
      "Organisation": "XYZ Company",
      "Date": "2024-03-18",
      "status": "complete "
    },
    {
      "Amount": "310",
      "Product": "Smartphone",
      "Organisation": "ABC Inc.",
      "Date": "2024-03-18",
      "status": "complete "
    },
    {
      "Amount": "70",
      "Product": "Television",
      "Organisation": "DEF Corp.",
      "Date": "2024-03-19",
      "status": "complete"
    },
    {
      "Amount": "100",
      "Product": "Headphones",
      "Organisation": "GHI Ltd.",
      "Date": "2024-03-19",
      "status": "pending "
    },
    {
      "Amount": "40",
      "Product": "Tablet",
      "Organisation": "JKL Enterprises",
      "Date": "2024-03-18",
      "status": "complete "
    },
    {
      "Amount": "20",
      "Product": "Camera",
      "Organisation": "MNO Corporation",
      "Date": "2024-03-19",
      "status": "complete" 
    }
  ]
  sub = [
    {
      "Amount": "50",
      "Product": "Laptop",
      "Organisation": "XYZ Company",
      "Date": "2024-03-18",
      "status": "complete "
    },
    {
      "Amount": "30",
      "Product": "Smartphone",
      "Organisation": "ABC Inc.",
      "Date": "2024-03-18",
      "status": "complete "
    },
    {
      "Amount": "200",
      "Product": "Television",
      "Organisation": "DEF Corp.",
      "Date": "2024-03-19",
      "status": "complete"
    },
    {
      "Amount": "100",
      "Product": "Headphones",
      "Organisation": "GHI Ltd.",
      "Date": "2024-03-19",
      "status": "pending "
    },
    {
      "Amount": "40",
      "Product": "Tablet",
      "Organisation": "JKL Enterprises",
      "Date": "2024-03-18",
      "status": "complete "
    },
    {
      "Amount": "900",
      "Product": "Camera",
      "Organisation": "MNO Corporation",
      "Date": "2024-03-19",
      "status": "complete" 
    }
  ]

  getData(){
    return this.sales;
  }
  getOrder(){
    return this.orders;
  }
  getInventory(){
    return this.inventory;
  }
  getsub(){
    return this.sub;
  }
  getRequests(){
    return this.requests;
  }
}
