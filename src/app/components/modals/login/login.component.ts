import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/redux/models/user.model';
import { UserFacade } from 'src/app/redux/user/user.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userObject: User;

  
  constructor(  public modalController: ModalController,
                private userFacade: UserFacade,
                public router: Router ) { }

  ngOnInit() {

    this.userFacade.user$.subscribe(resp => {
      this.userObject = resp;
    });
    this.userFacade.hasError$.subscribe(err =>{
      console.log(err);
    });
    this.userFacade.getUser();

  }

  dismissModal() {
    this.userFacade.resetUser();
    this.modalController.dismiss();
  }

  confirmUserData(){
    this.modalController.dismiss();
    // this.router.navigateByUrl('tabs/dashboard')
  }
}
