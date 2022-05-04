import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-tems',
  templateUrl: './cart-tems.component.html',
  styleUrls: ['./cart-tems.component.scss'],
})
export class CartTemsComponent implements OnInit {

  itemsCart$: Observable<any>
  cartProducts = [];

  constructor( private store: Store<any> ) { }

  ngOnInit() {

    this.itemsCart$ = this.store.select(store => store.cart);
    this.itemsCart$.subscribe( (data)=>{
      this.cartProducts = data;
    }).unsubscribe();

  }

}
