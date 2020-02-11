import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>{{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.city}}, {{address.street}}</p>
  <button (click)="toggleHobbies()">{{showHobbies? "Hide Hobbies" : "Schow Hobbies"}}</button>
  <div *ngIf="showHobbies">
    <h3>Hobbies</h3>
    <ul>
      <li *ngFor="let hobby of hobbies; let i = index">
      {{hobby}} <button (click) = "deleteHobby(i)">X</button>
      </li>
        <form (submit) = "addHobby(hobby.value)">
            <label>Add Hobby: </label><br />
            <input type="text" #hobby /><br />
        </form>    
    </ul>
  </div>
  <hr/>
  <h3>Edit User</h3>
  <form>
  <label>Name: </label><br />
  <input type="text" name= "name" [(ngModel)]="name" /><br />
  <label>Email: </label><br />
  <input type="text" name= "email" [(ngModel)]="email" /><br />
  <label>City: </label><br />
  <input type="text" name= "address.city" [(ngModel)]="address.city" /><br />
  <label>Street: </label><br />
  <input type="text" name= "address.street" [(ngModel)]="address.street" /><br />
  </form>
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
          street: 'Maria Tusch Str',
          city: 'Vienna'
        } 
        this.hobbies = ['Music', 'Movies','Sports'];
        this.showHobbies = false;
    }
    toggleHobbies(){
        console.log("toogle hobbies");
        this.showHobbies=!this.showHobbies;
    }
    addHobby(hobby){
        this.hobbies.push(hobby);
    }
    deleteHobby(i){
        this.hobbies.splice(i,1);
    }
}
interface address{
    street: string;
    city: string;
}

