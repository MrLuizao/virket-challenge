import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/components/modals/login/login.component';
import { IUserData } from 'src/app/interfaces/data-user.interface';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userObject: IUserData;
  picUrl: string;
  nameUser: string;

  constructor( private apiService: ApiDataService, public modalController: ModalController) { }

  ngOnInit() {
    
    this.apiService.getUserData().subscribe( (data: IUserData) =>{
      this.userObject = data['data'];

      this.picUrl = this.userObject.picture['thumbnail'];
      let indexOf = this.userObject['fullName'].indexOf(" ");
      this.nameUser = this.userObject['fullName'].substring(0, indexOf);
    });

  }

  async cardLoginModal(){
    const modal = await this.modalController.create({
      component: LoginComponent,
    });
    modal.present();
  }

}
