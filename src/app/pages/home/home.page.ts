import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/components/modals/login/login.component';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/redux/app.reducer';
import { User } from 'src/app/redux/models/user.model';
// import { setUser } from 'src/app/redux/user/user.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  picUrl: string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
  messageHome: string = 'Bienvenido';
  nameUser: string = '';

  userObject: User;
  isGuest: boolean;

  constructor(  private store: Store<AppState>,
                public router: Router,
                public modalController: ModalController) { }

  ngOnInit() {

    // this.store.select('user').subscribe( (store)=>{
    //   this.userObject = store.user;
      
    //   this.isGuest = this.userObject['guest'];
    //   this.picUrl = this.userObject['picture'];
    //   this.messageHome = this.userObject['titleText'];
      
    //   let indexOf = this.userObject['fullName'].indexOf(" ");
    //   this.nameUser = this.userObject['fullName'].substring(0, indexOf);
    // })
    
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

    // const UPDATE_USER = {
    //   fullName: 'Invitado',
    //   email: '',
    //   titleText: 'Bienvenido',
    //   picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    //   guest: true
    // } 
    //this.store.dispatch( setUser({ user: UPDATE_USER}) );
    this.router.navigateByUrl('tabs/dashboard');
  }

}
