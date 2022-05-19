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

  constructor(  public router: Router,
                private userFacade: UserFacade  ) { }

  ngOnInit() {

    this.userFacade.guestUser$.subscribe(resp => {
      this.detailData = resp;
      let nameDivider = this.detailData?.fullName;
      this.nameSplit = nameDivider.split(' ', 4);
    });

  }

  navigateToFavs() {
    this.router.navigateByUrl('favorites');
  }

  logoutSession() {
    this.userFacade.resetUser();
    this.router.navigateByUrl('home');
  }

}
