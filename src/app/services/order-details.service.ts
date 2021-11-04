import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {


  // add api url here
  APIUrl='http://nancyflashcards.herokuapp.com/';

  constructor(private http:HttpClient) { }

  // infodetails

  infoDetails = [
    {
      id:1,
      infoName:"Open range oven",
      infoDetails:"Pan-fried masala paneer.",
      infoPrice:5000,
      infoImg:"https://images.unsplash.com/photo-1576097449798-7c7f90e1248a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:2,
      infoName:"Fine Dining Table",
      infoDetails:"hard,soft wooded and metal type",
      infoPrice:369,
      infoImg:"https://images.unsplash.com/photo-1498491751984-14acb85d7d90?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw4OTMxMTQyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:3,
      infoName:"Kitchen type products",
      infoDetails:"panner",
      infoPrice:149,
      infoImg:"https://images.unsplash.com/photo-1631020280895-8449d8e1baaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:4,
      infoName:"Kitchen luxury Dining Table",
      infoDetails:"",
      infoPrice:8000,
      infoImg:"https://media.istockphoto.com/photos/luxury-home-exterior-at-sunset-outdoor-covered-patio-with-kitchen-picture-id1312027291?b=1&k=20&m=1312027291&s=170667a&w=0&h=zsZfv6pmyQbCTkQJ6QKf9ADRGL4CWQ4ZrO9JnrkYgcQ="
    },
    {
      id:5,
      infoName:"Indulgence Brownie",
      infoDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      infoPrice:105,
      infoImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      infoName:"Oreo Cheesecake Ice Cream",
      infoDetails:"Oreo ice cream",
      infoPrice:219,
      infoImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]



    // create new user
    createUser(username: string,email: string, password: string) {
      return this.http.post(
        this.APIUrl + 'users/create/',
        {
          username: username,
          password: password,
          email: email,
          
        },
        // {
        //   headers: {
        //     Authorization: 'Token ' + this.token,
        //   },
        // }
      );
    }
 
      // login user
   loginUser(username: string, password: string) {
    return this.http.post(
      this.APIUrl + 'login/',
      {
        username: username,
        password: password,
      },
      // {
      //   headers: {
      //     Authorization: 'Token ' + this.token,
      //   },
      // }
    );
  }

  // backend products
  Category: Category;
  name:Name;
  description:Description
  price:Price;
  image:Image
  date:Date;
  order:Order;

  // get products
  getCategory(){
    return this.http.get(this.url + 'category');
  }

  // get product name
  
}
