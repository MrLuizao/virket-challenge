import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductFacade } from 'src/app/redux/product/product.facade';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})

export class FavoritesPage implements OnInit {

  favorites = [];

  constructor(  public router: Router, 
                private prodFacade: ProductFacade,       
                private behaviourSrv: BindBehaviorService,) { }

  ngOnInit() {
    this.prodFacade.products$.subscribe( (data)=>{
      this.favorites = data.filter( element => element.is_favorite );
    });
    this.prodFacade.getProduct();    
  }

  goDetailItem(itemParam: IProduct){    
    this.behaviourSrv.setDataItem(itemParam);
    this.router.navigateByUrl('detail-product');
  }

}
