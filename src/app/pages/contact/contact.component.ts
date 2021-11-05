import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  getName(){
    alert("Thank you for contacting us. We will get back to you")
  }

  ngOnInit(): void {
  }

}
