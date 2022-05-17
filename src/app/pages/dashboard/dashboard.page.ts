import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/alerts/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  dataProducts: any;

  constructor( public toastSrv: ToastService) { }

  ngOnInit() { }

}
