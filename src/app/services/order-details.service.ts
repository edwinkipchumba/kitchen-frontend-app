import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // productdetails

  Details = [
    {
      id:1,
      productName:"Paneer Grilled Sandwich",
      Details:"Pan-fried masala paneer.",
      productPrice:200,
      productImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      productName:"Veggie Supreme",
      Details:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      productPrice:369,
      productImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      productName:"Paneer Burger",
      Details:"panner",
      productPrice:149,
      productImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      productName:"Veg Masala Roll In Naan",
      Details:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      productPrice:140,
      productImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      productName:"Indulgence Brownie",
      Details:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      productPrice:105,
      productImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      productName:"Oreo Cheesecake Ice Cream",
      Details:"Oreo ice cream",
      productPrice:219,
      productImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]
}
