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
      street: "MAria Tusch Str",
      city: "Vienna"
    }
}
