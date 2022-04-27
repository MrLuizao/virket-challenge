import { Component, OnInit } from '@angular/core';
import { IUserData } from 'src/app/interfaces/data-user.interface';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userObject: IUserData;
  picUrl: string;
  nameUser: string;

  constructor( private apiService: ApiDataService) { }

  ngOnInit() {
    
    this.apiService.getUserData().subscribe( (data: IUserData) =>{
      this.userObject = data['data'];

      this.picUrl = this.userObject.picture['thumbnail'];
      let indexOf = this.userObject['fullName'].indexOf(" ");
      this.nameUser = this.userObject['fullName'].substring(0, indexOf);

    });
  }

}
