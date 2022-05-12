import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction } from 'src/app/redux/product/product.actions';
import { ApiCartItemsService } from 'src/app/services/api-cart-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  isOpen: boolean = false;
  cartProducts = [];
  arrayPrices = [];
  subTotalAccount: number 
  totalAccount: number
  deliveryCost = 200;
  cartItems$: any;


  constructor(  private store: Store<any> ) { }

  ngOnInit() {

    this.cartItems$ = this.store.select(store => store.cart);
    this.cartItems$.subscribe( (data)=>{
      this.cartProducts = data[0];
      console.log('this.cartProducts', this.cartProducts);

      this.arrayPrices = this.cartProducts.map( element => parseFloat(element.product_price) );
      this.subTotalAccount = this.arrayPrices.reduce( (accumulator, curr) => accumulator + curr);
      this.totalAccount = this.subTotalAccount + this.deliveryCost;
    });


    // this.cartItemSrv.getCartProducts().subscribe( (resp: any)=>{
    //   this.dataFavs = resp['data'].products;
      
    //   this.dataFavs.forEach( (item)=>{
    //     this.store.dispatch( new AddItemAction(item));
    //   });

    //   this.itemsCart$ = this.store.select(store => store.cart);
    //   this.itemsCart$.subscribe( (data)=>{
    //     this.cartProducts = data;
  
    //     this.arrayPrices = this.cartProducts.map( element => parseFloat(element.product_price) );
    //     this.subTotalAccount = this.arrayPrices.reduce( (accumulator, curr) => accumulator + curr);
    //     this.totalAccount = this.subTotalAccount + this.deliveryCost;
    //   });
    // });

  }

  tapToMoveCard(){
    this.isOpen = !this.isOpen;
  }

}
