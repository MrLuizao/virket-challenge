import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/redux/models/user.model';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
// import { setUser } from 'src/app/redux/user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userObject: User;

  nameUser: string;
  mailUser: string;

  
  constructor(  public modalController: ModalController,
                private apiService: ApiDataService ,
                private store: Store<AppState>,
                public router: Router, ) { }

  ngOnInit() {
    this.apiService.getUserData().subscribe( (data) =>{
      this.userObject = data['data'];
      
      this.nameUser = this.userObject.fullName;
      this.mailUser = this.userObject.email;
    });
  }

  dismissModal() {
      this.modalController.dismiss();
  }

  confirmUserData(){
    const UPDATE_USER = {
      fullName: this.userObject.fullName,
      email: this.userObject.email,
      titleText: 'Bienvenido de vuelta,',
      picture: this.userObject['picture']['medium'],
      guest: false
    } 
   // this.store.dispatch( setUser({ user: UPDATE_USER}) );
    this.modalController.dismiss();
    // this.router.navigateByUrl('dashboard');
  }
}
