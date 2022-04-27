import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './modals/login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, 
    IonicModule
  ], 
  exports:[
    LoginComponent
  ]
})
export class ComponentsModule { }
