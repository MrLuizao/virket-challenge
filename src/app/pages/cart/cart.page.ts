import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  productItem: IProduct;
  isOpen: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  tapToMoveCard(){
    this.isOpen = !this.isOpen;
  }

}
