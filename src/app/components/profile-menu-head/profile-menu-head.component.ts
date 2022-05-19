import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { User } from 'src/app/redux/models/user.model';
import { UserFacade } from 'src/app/redux/user/user.facade';

@Component({
  selector: 'app-profile-menu-head',
  templateUrl: './profile-menu-head.component.html',
  styleUrls: ['./profile-menu-head.component.scss'],
})
export class ProfileMenuHeadComponent implements OnInit {

  profileData: User;
  thumbnail: string;
  nameShort: string;

  constructor(  private store: Store<AppState>,
                private userFacade: UserFacade,
                public router: Router ) { }

  ngOnInit() {
    this.userFacade.guestUser$.subscribe(resp => {
      this.profileData = resp;
      let indexOf = this.profileData['fullName'].indexOf(" ");
      this.nameShort = this.profileData.fullName.substring(0, indexOf);
    });

  }

  viewDeatilProfile(){
    this.router.navigateByUrl('detail-profile');
  }

}
