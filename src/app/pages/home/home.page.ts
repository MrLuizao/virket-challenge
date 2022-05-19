import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/components/modals/login/login.component';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/redux/app.reducer';
import { User } from 'src/app/redux/models/user.model';
import { UserFacade } from 'src/app/redux/user/user.facade';
// import { setUser } from 'src/app/redux/user/user.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userObject: User;
  nameUser: string;

  constructor(  private store: Store<AppState>,
                public router: Router,
                private userFacade: UserFacade,
                public modalController: ModalController) { }

  ngOnInit() {
    this.userFacade.user$.subscribe(resp => {      
      this.userObject = resp;      

      let indexOf = this.userObject?.fullName.indexOf(" ");
      this.nameUser = this.userObject?.fullName.substring(0, indexOf);
    });

    this.userFacade.hasError$.subscribe(err =>{
      console.log(err);
    });

  }

  async cardLoginModal(){
    const modal = await this.modalController.create({
      component: LoginComponent,
    });
    modal.present();
  }

  goEntryAfterRegistry(){
    this.router.navigateByUrl('tabs/dashboard');
  }

  accessAsGuest(){

    this.userFacade.guestUser$.subscribe(resp => {
      this.userObject = resp;
    });

    this.userFacade.hasError$.subscribe(err =>{
      console.log(err);
    });

    this.userFacade.getGuest();

    this.router.navigateByUrl('tabs/dashboard');
  }

}
