import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderDetailsService } from '../../services/order-details.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: OrderDetailsService) { }

  ngOnInit(): void {
  }

  showSuccessMessage = false;

  // create a new user
  onSubmit(form: NgForm) {
   const username = form.value.username;
   const email = form.value.email;
   const password = form.value.password;
   const c_password = form.value.c_password;

   // check if passwords match
   if (password !== c_password) {
     alert('Passwords do not match');
     return;
   }

   this.service
     .createUser(username, email, password)
     .subscribe((response) => {
       console.log(response);
       this.showSuccessMessage = true;
     });

   form.reset();
 }
}
