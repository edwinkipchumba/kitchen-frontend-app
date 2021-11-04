import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // backend products
  category;
  name;
  description;
  price;
  image;
  date;
  order;

  infoData:any;

  constructor(private service:OrderDetailsService) { }
  

  ngOnInit(): void {
    this.infoData = this.service.infoDetails;

    // products
    // this.getCategory();
    this.getName();
    // this.getDescription();
    // this.getPrice();
    // this.getImage();
    // this.getDate();
    // this.getOrder();
  }

  // getCategory(){
  //   this.service.getCategory().subscribe((data: any) => {
  //     this.category = data;
  //     console.log(this.category);
  //   });
  // }

  // name
  getName(){
    this.service.getName().subscribe((data: any) => {
      this.name = data;
      console.log(this.name);
    });
  }

  // getDescription(){
  //   this.service.getDescription().subscribe((data: any) => {
  //     this.description = data;
  //     console.log(this.description);
  //   });
  // }

  // getPrice(){
  //   this.service.getPrice().subscribe((data: any) => {
  //     this.price = data;
  //     console.log(this.price);
  //   });
  // }
  

  // getImage(){
  //   this.service.getImage().subscribe((data: any) => {
  //     this.image = data;
  //     console.log(this.image);
  //   });
  // }
  
  // getDate(){
  //   this.service.getDate().subscribe((data: any) => {
  //     this.date = data;
  //     console.log(this.date);
  //   });
  // }
  
  // getOrder(){
  //   this.service.getOrder().subscribe((data: any) => {
  //     this.order = data;
  //     console.log(this.order);
  //   });
  // }
  
  
}
