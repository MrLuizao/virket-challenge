import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from 'src/app/redux/product/product.effects';
import { ProductFacade } from 'src/app/redux/product/product.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule, 
    ComponentsModule,
    EffectsModule.forFeature([ProductsEffects]),

  ],
  declarations: [FavoritesPage],
  providers:[ProductFacade]

})
export class FavoritesPageModule {}
