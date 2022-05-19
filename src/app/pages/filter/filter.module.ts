import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterPageRoutingModule } from './filter-routing.module';

import { FilterPage } from './filter.page';
import { ProductsEffects } from 'src/app/redux/product/product.effects';
import { EffectsModule } from '@ngrx/effects';
import { ProductFacade } from 'src/app/redux/product/product.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterPageRoutingModule,
    EffectsModule.forFeature([ProductsEffects]),
  ],
  declarations: [FilterPage],
  providers:[ProductFacade]
})
export class FilterPageModule {}
