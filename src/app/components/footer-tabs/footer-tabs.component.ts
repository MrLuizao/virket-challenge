import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-tabs',
  templateUrl: './footer-tabs.component.html',
  styleUrls: ['./footer-tabs.component.scss'],
})
export class FooterTabsComponent implements OnInit {

  constructor(  public router: Router ) { }

  ngOnInit() {}

  navigateToCart(){
    this.router.navigateByUrl('cart');
  }

}
