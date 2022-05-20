import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartFacade } from 'src/app/redux/cart/cart.facade';
import { ToastService } from 'src/app/services/alerts/toast.service';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';

@Component({
  selector: 'app-cart-tems',
  templateUrl: './cart-tems.component.html',
  styleUrls: ['./cart-tems.component.scss'],
})
export class CartTemsComponent implements OnInit {

  itemsCart$: Observable<any>
  cartProducts: any;


  constructor(  private cartFacade: CartFacade,  
                private behaviourSrv: BindBehaviorService,           
                public toastSrv: ToastService,
                private store: Store ) { }

  ngOnInit() {

    this.cartFacade.items$.subscribe( (resp)=>{
      this.cartProducts = resp;  
      this.behaviourSrv.setDataCart(this.cartProducts);
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
