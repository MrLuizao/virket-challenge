import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product.interface';
// import { AddCartItem } from 'src/app/redux/cart/cart.actions';
import { Product } from 'src/app/redux/models/product.model';
import { ProductFacade } from 'src/app/redux/product/product.facade';
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

  detailIndex: number = -1;

  constructor(  public router: Router, 
                public toastSrv: ToastService,
                private behaviourSrv: BindBehaviorService,
                private prodFacade: ProductFacade,              
                public toastController: ToastController) { }

  ngOnInit() {

    this.prodFacade.products$.subscribe( (response)=>{
      this.productsData = response;
      console.log(this.productsData);
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

    let product = { ...paramItem, color: paramItem.colors[0] }

    // this.store.dispatch( new AddCartItem(product));
    this.toastSrv.showToastAlert('Producto agregado correctamente');
  }

  // moreActions(index){  
  //   console.log(index);
  //   return
  //   this.productsData[index].open = !this.productsData[index].open;
  // }

  toogleDetails(index: number){
    if(index === this.detailIndex){
      this.detailIndex = -1;
      return;
    }
    this.detailIndex = index;
  }

}
