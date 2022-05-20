import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product.interface';
import * as productActions from 'src/app/redux/product/product.actions';
import { ToastService } from 'src/app/services/alerts/toast.service';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';

@Component({
  selector: 'app-favorite-items',
  templateUrl: './favorite-items.component.html',
  styleUrls: ['./favorite-items.component.scss'],
})
export class FavoriteItemsComponent implements OnInit {

  favorites = [];
  storeItems$: any;


  constructor(  private behaviourSrv: BindBehaviorService,
                private store: Store<any>,
                public router: Router, 
                public toastSrv: ToastService ) { }

  ngOnInit() {
    this.storeItems$ = this.store.select(store => store.product);
    this.storeItems$.subscribe( (data)=>{
      this.favorites = data.filter( element => element.is_favorite );
    });
  }

  goDetailItem(itemParam: IProduct){    
    this.behaviourSrv.setDataItem(itemParam);
    this.router.navigateByUrl('detail-product');
  }

}
