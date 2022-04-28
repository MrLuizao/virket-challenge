import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './modals/login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule
  ], 
  exports:[
    LoginComponent
  ]
})
export class ComponentsModule { }
