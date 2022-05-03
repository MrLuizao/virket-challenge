import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/components/modals/login/login.component';
import { IProduct } from 'src/app/interfaces/product.interface';
import { BindBehaviorService } from 'src/app/services/rxjs/bind-behavior.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {

  productItem: IProduct;
  isOpen: boolean = false;
  colorsPalete: string;

  constructor(  private behaviourSrv: BindBehaviorService ) { }

  ngOnInit() {
    this.behaviourSrv.$getDataItem.subscribe( (resp: IProduct) =>{

      this.productItem = resp;
      // this.productItem = {
      //   brand: "Jabra",
      //   colors: [{
      //     hex: "#ffa500",
      //     name: "Naranja"
      //   }],
      //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      //   discount: "350.0",
      //   id: 6,
      //   is_favorite: false,
      //   product_image: "https://purepng.com/public/uploads/large/headphones-1ax.png",
      //   product_name: "Jabra Star light",
      //   product_price: "1500.0",
      //   reviews: "10",
      //   score: 3,
      //   sku: "00750105772039",
      // }     
      console.log('this.productItem',this.productItem);

    }).unsubscribe();
  }

  tapToMoveCard(){
    this.isOpen = !this.isOpen;
  }

}
