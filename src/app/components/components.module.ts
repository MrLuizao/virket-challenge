import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './modals/login/login.component';
import { FormsModule } from '@angular/forms';
import { DiscoverComponent } from './discover/discover.component';
import { ProfileMenuHeadComponent } from './profile-menu-head/profile-menu-head.component';



@NgModule({
  declarations: [
    LoginComponent,
    DiscoverComponent,
    ProfileMenuHeadComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule
  ], 
  exports:[
    LoginComponent,
    DiscoverComponent,
    ProfileMenuHeadComponent
  ]
})
export class ComponentsModule { }
