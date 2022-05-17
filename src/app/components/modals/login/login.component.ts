import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/redux/models/user.model';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { UserFacade } from 'src/app/redux/user/user.facade';
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
                private store: Store<AppState>,
                private userFacade: UserFacade,
                public router: Router ) { }

  ngOnInit() {

    this.userFacade.user$.subscribe(resp => {
      this.userObject = resp;
      console.log(this.userObject);
    });

    this.userFacade.hasError$.subscribe(err =>{
      console.log(err);
    });
    
    this.userFacade.getUser();

  }

  dismissModal() {
      this.modalController.dismiss();
  }

  confirmUserData(){
    this.modalController.dismiss();
  }
}
