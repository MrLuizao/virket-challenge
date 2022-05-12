import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/redux/models/user.model';
import { UserFacade } from 'src/app/redux/user/user.facade';

// import { setUser } from 'src/app/redux/user/user.actions';

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

  constructor(
    public router: Router,
    //private store: Store<AppState>
    private userFacade: UserFacade
  ) { }

  ngOnInit() {
    this.handleData();
    /*  this.store.select('user').subscribe( (store)=>{
       this.detailData = store['user']
       this.urlProfile = this.detailData['picture'];
       this.emailDetail = this.detailData['email'];
 
       let nameDivider = this.detailData.fullName;
       this.nameSplit = nameDivider.split(' ', 4);
     }).unsubscribe(); */
  }

  handleData() {
    this.userFacade.username$.subscribe(res => {
      console.log(res);
    });
    this.userFacade.hasError$.subscribe(res=>{
      console.log(res);
    });
    //this.userFacade.getUser();
  }

  navigateToFavs() {
    this.router.navigateByUrl('favorites');
  }

  logoutSession() {
    this.userFacade.getUser();
   /*  const RESET_USER = {
      fullName: 'Invitado',
      email: '',
      titleText: 'Bienvenido',
      picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
      guest: true
    };

    // this.store.dispatch( setUser({ user: RESET_USER}) );
    this.router.navigateByUrl('home'); */
  }



}
