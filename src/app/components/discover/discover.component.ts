import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {

  productsData: IProduct | any;

  constructor(  public router: Router, 
                private productsSrv: ApiProductsService,
                private behaviourSrv: BindBehaviorService) { }

  ngOnInit() {
    this.productsSrv.getAllProducts().subscribe( (resp: IProduct)=>{
      this.productsData = resp['data'];
    });
  }

  viewDetailPage(itemParam: IProduct){    
    this.behaviourSrv.setDataItem(itemParam);
    this.router.navigateByUrl('detail-product');
  }

  addToCart(){
    alert('SÍ FUNCIONA!!')
  }

}
