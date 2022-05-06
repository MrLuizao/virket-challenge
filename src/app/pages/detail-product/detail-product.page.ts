import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product.interface';
import { AddItemAction } from 'src/app/redux/product/product.actions';
import { ToastService } from 'src/app/services/alerts/toast.service';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {

  isOpen: boolean = false;
  productItem: IProduct;

  constructor(  private behaviourSrv: BindBehaviorService,
                public toastSrv: ToastService,
                private store: Store<any>,
                 ) { }

  ngOnInit() {
    this.behaviourSrv.$getDataItem.subscribe( (resp: IProduct) =>{
      this.productItem = resp;
    }).unsubscribe();
  }

  tapToMoveCard(){
    this.isOpen = !this.isOpen;
  }

  setProductCart(paramItem : any){
    
    let product = { ...paramItem, color: paramItem.colors[0] }

    this.store.dispatch( new AddItemAction(product));
    this.toastSrv.showToastAlert('Producto agregado correctamente');
  }

}
