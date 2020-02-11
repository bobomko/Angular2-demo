import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<user></user>
  `,
})
export class AppComponent  { 
    name = "Ali Akalin";
    email = "pimpip@pim.pip"
    address ={
      street: "Maria Tusch Str",
      city: "Vienna"
    }
}
