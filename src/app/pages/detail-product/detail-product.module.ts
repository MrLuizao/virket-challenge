import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProductPageRoutingModule } from './detail-product-routing.module';

import { DetailProductPage } from './detail-product.page';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from 'src/app/redux/cart/cart.effects';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from 'src/app/redux/cart/cart.reducer';
import { CartFacade } from 'src/app/redux/cart/cart.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProductPageRoutingModule
  ],
  declarations: [DetailProductPage],
  providers:[  
    CartFacade,
  ]
})
export class DetailProductPageModule {}
