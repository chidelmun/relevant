import { Component, OnInit } from '@angular/core';

import 'fabric';
declare const fabric: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  price: number = 0;
  activeIndex = 0;
  itemPrice = 8500;
  classes = ['col-left-green', 
              'col-left-orange',
              'col-left-yellow',
              'col-left-olive',
              'col-left-pink'
            ];
  activeClass = this.classes[this.activeIndex];

  constructor() { }

  ngOnInit() {

    //setup front side canvas
  }

  handleCheckout(){
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Charmaine Aprons Checkout',
      description: 'White Apron',
      amount: this.itemPrice * this.price
    });
  }

  
  addItemToCart() {
    this.price +=1;
  }

  nextClassIndex(){
    console.log(this.activeIndex);
    if(this.activeIndex > 3){
      this.activeIndex = 0;
    }else{
      this.activeIndex +=1;
    }
    this.activeClass = this.classes[this.activeIndex];
  }

  prevClassIndex(){
    console.log(this.activeIndex);
    console.log('Hello')
    if(this.activeIndex < 1){
      this.activeIndex = 4;
    }else{
      this.activeIndex -=1;
    }
    this.activeClass = this.classes[this.activeIndex];
  }

}
