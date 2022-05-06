import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  isOpen: boolean = false;
  
  itemsCart$: Observable<any>
  cartProducts = [];
  arrayPrices = [];
  subTotalAccount: number 
  totalAccount: number
  deliveryCost = 200;

  constructor( private store: Store<any> ) { }

  ngOnInit() {
    this.itemsCart$ = this.store.select(store => store.cart);
    this.itemsCart$.subscribe( (data)=>{
      this.cartProducts = data;
      console.log('cartProducts',this.cartProducts);

      // this.accountOperation();
      this.arrayPrices = this.cartProducts.map( element => parseFloat(element.product_price) );
      this.subTotalAccount = this.arrayPrices.reduce( (accumulator, curr) => accumulator + curr);
      this.totalAccount = this.subTotalAccount + this.deliveryCost;
    });
  }

  tapToMoveCard(){
    this.isOpen = !this.isOpen;
  }

  accountOperation(){
    this.arrayPrices = this.cartProducts.map( element => parseInt(element.product_price) );
    this.subTotalAccount = this.arrayPrices.reduce( (accumulator, curr) => accumulator + curr);
    this.totalAccount = this.subTotalAccount + this.deliveryCost;
  }

}
