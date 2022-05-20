import { Component, OnInit } from '@angular/core';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  isOpen: boolean = false;
  arrayPrices = [];
  subTotalAccount: number 
  totalAccount: number
  deliveryCost = 200;

  constructor(  private behaviourSrv: BindBehaviorService ) { }

  ngOnInit() {}

  tapToMoveCard(){
    this.isOpen = !this.isOpen;

    if(this.isOpen){
      this.behaviourSrv.$getDataCart.subscribe( (resp)=>{
        console.log('$getDataCart', resp); 
        this.arrayPrices = resp?.map( element => parseFloat(element.product_price) );
        this.subTotalAccount = this.arrayPrices?.reduce( (accumulator, curr) => accumulator + curr);
        this.totalAccount = this.subTotalAccount + this.deliveryCost;
      });
    }
  }

}
