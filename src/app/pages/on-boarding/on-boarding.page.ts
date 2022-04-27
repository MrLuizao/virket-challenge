import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
})
export class OnBoardingPage implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }

  viewedOnBoarding(){
    localStorage.setItem('onBoarding', 'viewed');
    this.router.navigateByUrl('home');
  }

}
