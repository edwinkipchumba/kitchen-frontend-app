import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  productData:any;

  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }

}
