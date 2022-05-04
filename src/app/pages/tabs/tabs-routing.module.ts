import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'dashboard',
        loadChildren: () => import('../../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../../pages/cart/cart.module').then( m => m.CartPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}