import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartFacade } from 'src/app/redux/cart/cart.facade';
// import { RemoveCartItem } from 'src/app/redux/cart/cart.actions';
// import { DeleteItemAction } from 'src/app/redux/product/product.actions';
import { ToastService } from 'src/app/services/alerts/toast.service';
import { ApiCartItemsService } from 'src/app/services/api-cart-items.service';

@Component({
  selector: 'app-cart-tems',
  templateUrl: './cart-tems.component.html',
  styleUrls: ['./cart-tems.component.scss'],
})
export class CartTemsComponent implements OnInit {

  itemsCart$: Observable<any>
  cartProducts: any;

  constructor(  private store: Store<any>,
                private cartFacade: CartFacade,              
                public toastSrv: ToastService ) { }

  ngOnInit() {

    // this.itemsCart$ = this.store.select(store => store.cart);
    // this.itemsCart$.subscribe( (data)=>{
    //   this.cartProducts = data;      
    // });

    this.cartFacade.items$.subscribe( (resp)=>{
      console.log('cartFacade items$', resp);
    });

    this.cartFacade.hasError$.subscribe( (err)=>{
      console.log('error', err);
    });

    this.cartFacade.getCartItems();
  }

  discardProductCart(paramItem : any){
    // this.store.dispatch( new RemoveCartItem(paramItem));
    this.toastSrv.showToastAlert('Producto removido correctamente');
  }

}
