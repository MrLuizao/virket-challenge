import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SetCartItems } from 'src/app/redux/cart/cart.actions';
import { Product } from 'src/app/redux/models/product.model';
import { AddItemAction, DeleteItemAction } from 'src/app/redux/product/product.actions';
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
                public toastSrv: ToastService,
                private cartItemSrv: ApiCartItemsService
                ) { }

  ngOnInit() {

    // this.itemsCart$ = this.store.select(store => store.product);
    // this.itemsCart$.subscribe( (data)=>{
    //   this.cartProducts = data[0];
    // });


    this.cartItemSrv.getCartProducts().subscribe( (resp: Product)=>{
      this.cartProducts = resp['data'].products;
      console.log('this.cartProducts',this.cartProducts);
      
      this.store.dispatch( new SetCartItems(this.cartProducts));

      // this.cartProducts.forEach( (item)=>{
      //   this.store.dispatch( new AddItemAction(item));
      // });

    });
  }

  discardProductCart(paramItem : any){
    this.store.dispatch( new DeleteItemAction(paramItem));
    this.toastSrv.showToastAlert('Producto removido correctamente');
  }

}
