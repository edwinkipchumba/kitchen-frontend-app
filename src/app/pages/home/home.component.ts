import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app.service/Order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  productData:any;

  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }

}
