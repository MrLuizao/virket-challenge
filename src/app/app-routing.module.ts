import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NewUserGuard } from './guards/new-user.guard';
import { PrevUserGuard } from './guards/prev-user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'on-boarding',
    pathMatch: 'full'
  },
  {
    path: 'on-boarding',
    loadChildren: () => import('./pages/on-boarding/on-boarding.module').then( m => m.OnBoardingPageModule),
    canActivate: [NewUserGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [PrevUserGuard]
    
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'detail-profile',
    loadChildren: () => import('./pages/detail-profile/detail-profile.module').then( m => m.DetailProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
