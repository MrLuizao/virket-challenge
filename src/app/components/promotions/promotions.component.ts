import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ToastService } from 'src/app/services/alerts/toast.service';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit {

  slideItems = [];
  slideOpts = {
    slidesPerView: 1.5,
    spaceBetween: 5,
    speed: 400,
    loop: true,
    centeredSlides: true
  }

  storeItems$: any;

  constructor(  private behaviourSrv: BindBehaviorService,
                public router: Router, 
                private store: Store<any>,
                public toastSrv: ToastService ) { }

  ngOnInit() {
    this.storeItems$ = this.store.select(store => store.cart);
    this.storeItems$.subscribe( (data)=>{
      this.slideItems = data[0];
    });
  }

  goDetailPage(itemParam: IProduct){    
    this.behaviourSrv.setDataItem(itemParam);
    this.router.navigateByUrl('detail-product');
  }
}
