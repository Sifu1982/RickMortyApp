import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './shared/components/card/card.component';
import { DetailPageComponent } from './detail/containers/detailpage/detail-page.component';
import { HomePageComponent } from './home/containers/home/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  },
  {
    path: 'detail',
    component: DetailPageComponent,
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailModule )
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
