import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductFacade } from 'src/app/redux/product/product.facade';
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
                private prodFacade: ProductFacade,              
                public toastSrv: ToastService ) { }

  ngOnInit() {

    this.prodFacade.products$.subscribe( (response)=>{
      this.slideItems = response;      
    })
    this.prodFacade.hasError$.subscribe( (error)=>{
      console.log(error);
    })
    this.prodFacade.getProduct();

  }

  goDetailPage(itemParam: IProduct){    
    this.behaviourSrv.setDataItem(itemParam);
    this.router.navigateByUrl('detail-product');
  }
}
