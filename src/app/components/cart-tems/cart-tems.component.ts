import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
                public toastSrv: ToastService) { }

  ngOnInit() {

    this.cartFacade.items$.subscribe( (resp)=>{
      this.cartProducts = resp;  
      this.behaviourSrv.setDataCart(this.cartProducts);
    });

  }

  discardProductCart(paramItem : number){
    this.cartFacade.deleteItem(paramItem);
    this.toastSrv.showToastAlert('Producto removido correctamente');
  }

}
