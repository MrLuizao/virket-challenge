import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './modals/login/login.component';
import { FormsModule } from '@angular/forms';
import { DiscoverComponent } from './discover/discover.component';
import { ProfileMenuHeadComponent } from './profile-menu-head/profile-menu-head.component';
import { FooterTabsComponent } from './footer-tabs/footer-tabs.component';
import { CartTemsComponent } from './cart-tems/cart-tems.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { UserFacade } from '../redux/user/user.facade';
import { ApiDataService } from '../services/api-data.service';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../redux/user/user.effects';
import { CartFacade } from '../redux/cart/cart.facade';
import { CartEffects } from '../redux/cart/cart.effects';
import { ApiCartItemsService } from '../services/api-cart-items.service';
import { StoreModule } from '@ngrx/store';
import * as cartReducer from '../redux/cart/cart.reducer'


@NgModule({
  declarations: [
    LoginComponent,
    DiscoverComponent,
    ProfileMenuHeadComponent,
    FooterTabsComponent,
    CartTemsComponent,
    PromotionsComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    EffectsModule.forFeature([UserEffects, CartEffects]),
    StoreModule.forFeature(cartReducer.featureKey, cartReducer.reducer)
  ], 
  exports:[
    LoginComponent,
    DiscoverComponent,
    ProfileMenuHeadComponent,
    FooterTabsComponent,
    CartTemsComponent,
    PromotionsComponent
  ],
  providers:[
    UserFacade, 
    ApiDataService,     
    CartFacade,
  ]

})
export class ComponentsModule { }
