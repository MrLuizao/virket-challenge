import { Component, OnInit } from '@angular/core';
import { CartFacade } from 'src/app/redux/cart/cart.facade';
import { ToastService } from 'src/app/services/alerts/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  dataProducts: any;

  constructor( public toastSrv: ToastService, private cartFacade: CartFacade  ) { }

  ngOnInit() { 
    this.cartFacade.items$.subscribe( (resp)=>{
      console.log('cartFacade', resp);
    });

    this.cartFacade.hasError$.subscribe( (err)=>{
      console.log('error', err);
    });

    this.cartFacade.getCartItems();
  }

}
