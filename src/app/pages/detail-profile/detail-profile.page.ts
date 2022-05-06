import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { User } from 'src/app/redux/models/user.model';
import { setUser } from 'src/app/redux/user/user.actions';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.page.html',
  styleUrls: ['./detail-profile.page.scss'],
})
export class DetailProfilePage implements OnInit {

  detailData: User;
  urlProfile: string;
  emailDetail: string;
  nameSplit: any;

  constructor(  public router: Router, 
                private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('user').subscribe( (store)=>{
      this.detailData = store['user']
      
      this.urlProfile = this.detailData['picture'];
      this.emailDetail = this.detailData['email'];

      let nameDivider = this.detailData.fullName;
      this.nameSplit = nameDivider.split(' ', 4);
    }).unsubscribe();
  }
  
  navigateToFavs(){
    this.router.navigateByUrl('favorites');
  }

  logoutSession(){
    const RESET_USER = {
      fullName: 'Invitado',
      email: '',
      titleText: 'Bienvenido',
      picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
      guest: true
    }

    this.store.dispatch( setUser({ user: RESET_USER}) );
    this.router.navigateByUrl('home');
  }



}
