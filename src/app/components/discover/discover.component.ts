import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product.interface';
import { CartFacade } from 'src/app/redux/cart/cart.facade';
import { ProductFacade } from 'src/app/redux/product/product.facade';
import { ToastService } from 'src/app/services/alerts/toast.service';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';
import * as fromActions from 'src/app/redux/cart/cart.actions';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {

  productsData: IProduct | any;
  nameSplit: string;
  detailIndex: number = -1;

  constructor(  public router: Router, 
                public toastSrv: ToastService,
                private behaviourSrv: BindBehaviorService,
                private prodFacade: ProductFacade,   
                private cartFacade: CartFacade,        
                public toastController: ToastController,
                private store: Store) { }

  ngOnInit() {

    this.prodFacade.products$.subscribe( (response)=>{
      this.productsData = response;
    })
    this.prodFacade.hasError$.subscribe( (error)=>{
      console.log(error);
    })
    this.prodFacade.getProduct();
  }

  viewDetailPage(itemParam: IProduct){    
    this.behaviourSrv.setDataItem(itemParam);
    this.router.navigateByUrl('detail-product');
  }

  addToCart(paramItem: any){    

    // let product = { ...paramItem, color: paramItem.colors[0] }
    // this.store.dispatch( new AddCartItem(product));

    // this.cartFacade.addItem$.subscribe((response)=>{
    //   console.log(response);
    // })
    // this.store.dispatch(fromActions.addItemAction(product));

    this.toastSrv.showToastAlert('Producto agregado correctamente');
  }

  toogleDetails(index: number){
    if(index === this.detailIndex){
      this.detailIndex = -1;
      return;
    }
    this.detailIndex = index;
  }

}
