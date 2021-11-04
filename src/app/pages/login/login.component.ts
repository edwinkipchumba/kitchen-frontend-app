import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { OrderDetailsService } from '../../services/order-details.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: OrderDetailsService, private router:Router) { }

  message;

  ngOnInit(): void {
  }

  loginUser(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.service.loginUser(username, password).subscribe(
      (response) => {
        console.log(response);

        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.log(error);
      }
    );
  } 

}
