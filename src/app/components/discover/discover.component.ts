import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product.interface';
import { Product } from 'src/app/redux/models/product.model';
import { AddItemAction } from 'src/app/redux/product/product.actions';
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
    this.productsSrv.getAllProducts().subscribe( (resp: IProduct)=>{
      this.productsData = resp['data'];
      this.behaviourSrv.setAllProducts(this.productsData);

      // this.store.dispatch( new SetAllItemsAction(this.productsData));
    });
  }

  viewDetailPage(itemParam: IProduct){    
    this.behaviourSrv.setDataItem(itemParam);
    this.router.navigateByUrl('detail-product');
  }

  addToCart(paramItem: any){

    let product = { ...paramItem, color: paramItem.colors[0] }

    this.store.dispatch( new AddItemAction(product));
    this.toastSrv.showToastAlert('Producto agregado correctamente');
  }

  moreActions(index){    
    this.productsData[index].open = !this.productsData[index].open;
  }

}
