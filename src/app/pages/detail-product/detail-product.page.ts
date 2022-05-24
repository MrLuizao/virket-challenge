import { Component, DebugElement, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartFacade } from 'src/app/redux/cart/cart.facade';
import { Product } from 'src/app/redux/models/product.model';
// import { AddCartItem } from 'src/app/redux/cart/cart.actions';
// import { AddItemAction } from 'src/app/redux/product/product.actions';
import { ToastService } from 'src/app/services/alerts/toast.service';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {

  isOpen: boolean = false;
  productItem: Product;
  radioColor: any;

  constructor(  private behaviourSrv: BindBehaviorService,
                private cartFacade: CartFacade,        
                public toastSrv: ToastService ) { }

  ngOnInit() {
    this.behaviourSrv.$getDataItem.subscribe( (resp: Product) =>{
      this.productItem = resp;
    }).unsubscribe();
  }

  tapToMoveCard(){
    this.isOpen = !this.isOpen;
  }

  selectColor( evt: any ){    
    this.radioColor = evt.detail.value;    
  }

  setProductCart(paramItem: Product){  
    console.log('paramItem', paramItem);

    if(this.radioColor === undefined){
      this.toastSrv.showToastAlert('Selecciona un color!');
      return
    } 
    this.cartFacade.addItem(paramItem);
    this.toastSrv.showToastAlert('Producto agregado correctamente');
  }

}
