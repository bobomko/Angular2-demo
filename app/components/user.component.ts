import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1> Hello {{name}}</h1>
  <p><strong>Email: {{email}}</strong></p>
  <p><strong>Address: {{address.city}} {{address.street}}</strong></p>
  `,
})
export class UserComponent  { 
    name = "Ali Akalin";
    email = "pimpip@pim.pip"
    address ={
      street: "MAria Tusch Str",
      city: "Vienna"
    }
}
