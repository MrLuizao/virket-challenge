import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductFacade } from 'src/app/redux/product/product.facade';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from 'src/app/redux/product/product.effects';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { CartEffects } from 'src/app/redux/cart/cart.effects';
import { CartFacade } from 'src/app/redux/cart/cart.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    ComponentsModule,
    EffectsModule.forFeature([
      ProductsEffects
    ])
  ],
  declarations: [CartPage],
  providers:[
    ProductFacade, 
    ApiProductsService
  ]
})
export class CartPageModule {}
