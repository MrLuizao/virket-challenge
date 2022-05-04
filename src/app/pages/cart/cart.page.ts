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
  
  constructor( private store: Store<any> ) { }

  ngOnInit() {
    this.itemsCart$ = this.store.select(store => store.cart);
    this.itemsCart$.subscribe( (data)=>{
      this.cartProducts = data;
      console.log('this.cartProducts', this.cartProducts);
    }).unsubscribe();
  }

  tapToMoveCard(){
    this.isOpen = !this.isOpen;
  }

}
