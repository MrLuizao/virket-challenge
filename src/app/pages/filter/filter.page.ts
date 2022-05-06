import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product.interface';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  slideOpts = {
    slidesPerView: 4.5,
    freeMode: true
  };

  products = [];
  brands = [];
  filterData = [];

  constructor(  public router: Router, 
                private behaviourSrv: BindBehaviorService ) { }

  ngOnInit() {

    this.behaviourSrv.$getArrayItems.subscribe( (items)=>{
      this.products = items;
      this.filterData = this.products;

      const brandsMap = this.products.map( element => element.brand );
      this.brands = brandsMap.filter( (item,index) => brandsMap.indexOf(item) === index );
    });

  }

  applyFilter(argument){
    if( argument === 'allItems'){
      this.filterData = this.products;
      return
    }
    this.filterData = this.products.filter( (element)=> element.brand === argument);
  }

  goDetailItem(itemParam: IProduct){    
    this.behaviourSrv.setDataItem(itemParam);
    this.router.navigateByUrl('detail-product');
  }
  
}
