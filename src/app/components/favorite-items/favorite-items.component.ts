import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product.interface';
import { AddItemAction } from 'src/app/redux/product/product.actions';
import { ToastService } from 'src/app/services/alerts/toast.service';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';

@Component({
  selector: 'app-favorite-items',
  templateUrl: './favorite-items.component.html',
  styleUrls: ['./favorite-items.component.scss'],
})
export class FavoriteItemsComponent implements OnInit {

  favorites = [];

  constructor(  private behaviourSrv: BindBehaviorService,
                private store: Store<any>,
                public router: Router, 
                public toastSrv: ToastService ) { }

  ngOnInit() {
    this.behaviourSrv.$getArrayItems.subscribe( (items)=>{
      this.favorites = items.filter( element => element.is_favorite );
      console.log(this.favorites);
    });
  }

  goDetailItem(itemParam: IProduct){    
    this.behaviourSrv.setDataItem(itemParam);
    this.router.navigateByUrl('detail-product');
  }

  addItemCart(paramItem: any){

    let product = { ...paramItem, color: paramItem.colors[0] }

    this.store.dispatch( new AddItemAction(product));
    this.toastSrv.showToastAlert('Producto agregado correctamente');
  }

  buttonMore(index){    
    this.favorites[index].open = !this.favorites[index].open;
  }

}
