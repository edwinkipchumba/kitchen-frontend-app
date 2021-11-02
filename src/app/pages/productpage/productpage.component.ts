import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getProductId:any;
  productData:any;

  ngOnInit(): void {
    this.getProductId = this.param.snapshot.paramMap.get('id');
    console.log(this.getProductId,'getproduct');
    if(this.getProductId)
    {
      this.productData =  this.service.Details.filter((value)=>{
          return value.id == this.getProductId;
        });
        console.log(this.productData,'productdata>>');
        
    }
    

  }

}
