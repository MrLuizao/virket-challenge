import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ApiProductsService } from 'src/app/services/api-products.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {

  productsData: IProduct | any;

  constructor( private productsSrv: ApiProductsService) { }

  ngOnInit() {
    this.productsSrv.getAllProducts().subscribe( (resp: IProduct)=>{
      this.productsData = resp['data'];
    });
  }

  addToCart(){
    alert('SÍ FUNCIONA!!')
  }

}
