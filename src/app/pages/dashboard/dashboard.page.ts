import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetCartItems } from 'src/app/redux/cart/cart.actions';
import { Product } from 'src/app/redux/models/product.model';
import { ToastService } from 'src/app/services/alerts/toast.service';
import { ApiCartItemsService } from 'src/app/services/api-cart-items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  dataProducts: any;

  constructor(  private store: Store<any>,
                public toastSrv: ToastService,
                private cartItemSrv: ApiCartItemsService) { }

  ngOnInit() {
    this.cartItemSrv.getCartProducts().subscribe( (resp: any)=>{
      this.dataProducts = resp['data'].products;
      
      this.dataProducts.forEach( (element)=>{
        let newObject = { ...element }
        this.store.dispatch( new SetCartItems(newObject));
      });

    });
  }

}
