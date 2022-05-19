import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProfilePageRoutingModule } from './detail-profile-routing.module';

import { DetailProfilePage } from './detail-profile.page';
import { UserFacade } from 'src/app/redux/user/user.facade';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/app/redux/user/user.effects';
import { ApiDataService } from 'src/app/services/api-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProfilePageRoutingModule,
    EffectsModule.forFeature([UserEffects]),
  ],
  declarations: [DetailProfilePage],
  providers:[UserFacade, ApiDataService]
})
export class DetailProfilePageModule {}
