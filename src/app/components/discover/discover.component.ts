import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product.interface';
// import { AddCartItem } from 'src/app/redux/cart/cart.actions';
import { Product } from 'src/app/redux/models/product.model';
// import { SetAllItemsAction } from 'src/app/redux/product/product.actions';
import { ToastService } from 'src/app/services/alerts/toast.service';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {

  productsData: IProduct | any;
  optionsCard: boolean;

  nameSplit: string;

  constructor(  public router: Router, 
                private productsSrv: ApiProductsService,
                private store: Store<any>,
                public toastSrv: ToastService,
                private behaviourSrv: BindBehaviorService,
                public toastController: ToastController) { }

  ngOnInit() {
    // this.productsSrv.getAllProducts().subscribe( (resp: Product)=>{
    //   this.productsData = resp['data'];      
      
    //   this.productsData.forEach( (element)=>{
    //     let objectWithProperty = { ...element, open: false }
    //     // this.store.dispatch( new SetAllItemsAction(objectWithProperty))
    //   });
      
    // });
  }

  viewDetailPage(itemParam: IProduct){    
    this.behaviourSrv.setDataItem(itemParam);
    this.router.navigateByUrl('detail-product');
  }

  addToCart(paramItem: any){

    let product = { ...paramItem, color: paramItem.colors[0] }

    // this.store.dispatch( new AddCartItem(product));
    this.toastSrv.showToastAlert('Producto agregado correctamente');
  }

  moreActions(index){    
    this.productsData[index].open = !this.productsData[index].open;
  }

}
