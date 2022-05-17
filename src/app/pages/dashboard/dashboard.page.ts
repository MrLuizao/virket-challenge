import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartFacade } from 'src/app/redux/cart/cart.facade';
import { Product } from 'src/app/redux/models/product.model';
import { ProductFacade } from 'src/app/redux/product/product.facade';
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
                private productFacade: ProductFacade,
                private cartFacade: CartFacade,              
                private cartItemSrv: ApiCartItemsService) { }

  ngOnInit() {

    this.productFacade.products$.subscribe( (resp)=>{
      console.log('FACADE resp', resp);
    });

    this.productFacade.getProduct();


    // this.cartItemSrv.getCartProducts().subscribe( (resp: any)=>{
    //   this.dataProducts = resp['data'].products;
      
    //   this.dataProducts.forEach( (element)=>{
    //     let newObject = { ...element }
    //     this.store.dispatch( new SetCartItems(newObject));
    //   });

    // });
  }

}
