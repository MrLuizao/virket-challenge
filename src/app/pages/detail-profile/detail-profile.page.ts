import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { User } from 'src/app/redux/models/user.model';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.page.html',
  styleUrls: ['./detail-profile.page.scss'],
})
export class DetailProfilePage implements OnInit {

  detailData: User;
  urlProfile: string;
  emailDetail: string;

  constructor( private store: Store<AppState>,) { }

  ngOnInit() {

    this.store.select('user').subscribe( (store)=>{
      this.detailData = store['user']
      console.log('this.detailData',this.detailData);

      this.urlProfile = this.detailData['picture'];
      this.emailDetail = this.detailData['email'];

    });
  }

}
