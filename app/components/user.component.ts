import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1> Hello {{name}}</h1>
  <p><strong>Email: {{email}}</strong></p>
  <p><strong>Address: {{address.city}} {{address.street}}</strong></p>
  <button (click)="toggleHobbies()">{{showHobbies? "Hide Hobbies" : "Schow Hobbies"}}</button>
  <div *ngIf="showHobbies">
    <h3>Hobbies</h3>
    <ul>
      <li *ngFor="let hobby of hobbies">
      {{hobby}}
      </li>
    </ul>
  </div>
  `,
})
export class UserComponent  { 
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;

    constructor(){
        this.name = 'Ali Akalin';
        this.email = 'pimpip@pim.pip';
        this.address ={
          street: 'MAria Tusch Str',
          city: 'Vienna'
        } 
        this.hobbies = ['Music', 'Movies','Sports'];
        this.showHobbies = false;
    }
    toggleHobbies(){
        console.log("toogle hobbies");
        this.showHobbies=!this.showHobbies;
    }
}
interface address{
    street: string;
    city: string;
}

