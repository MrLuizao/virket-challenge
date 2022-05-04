import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './modals/login/login.component';
import { FormsModule } from '@angular/forms';
import { DiscoverComponent } from './discover/discover.component';
import { ProfileMenuHeadComponent } from './profile-menu-head/profile-menu-head.component';
import { FooterTabsComponent } from './footer-tabs/footer-tabs.component';
import { FavoriteItemsComponent } from './favorite-items/favorite-items.component';
import { CartTemsComponent } from './cart-tems/cart-tems.component';



@NgModule({
  declarations: [
    LoginComponent,
    DiscoverComponent,
    ProfileMenuHeadComponent,
    FooterTabsComponent,
    CartTemsComponent,
    FavoriteItemsComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule
  ], 
  exports:[
    LoginComponent,
    DiscoverComponent,
    ProfileMenuHeadComponent,
    FooterTabsComponent,
    CartTemsComponent,
    FavoriteItemsComponent
  ]
})
export class ComponentsModule { }
