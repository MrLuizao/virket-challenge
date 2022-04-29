import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.page.html',
  styleUrls: ['./detail-profile.page.scss'],
})
export class DetailProfilePage implements OnInit {

  constructor( private store: Store<AppState>,) { }

  ngOnInit() {

    this.store.select('user').subscribe( (store)=>{
      console.log(store);
    });
  }

}
