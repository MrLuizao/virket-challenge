import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductFacade } from 'src/app/redux/product/product.facade';
import { ProductsEffects } from 'src/app/redux/product/product.effects';
import { EffectsModule } from '@ngrx/effects';
import { ApiProductsService } from 'src/app/services/api-products.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ComponentsModule,
    EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: [DashboardPage],
  providers:[ProductFacade, ApiProductsService]

})
export class DashboardPageModule {}
