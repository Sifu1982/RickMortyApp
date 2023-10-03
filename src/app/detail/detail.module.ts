import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DetailPageComponent } from './containers/detailpage/detail-page.component';

import { DetailRoutingModule } from './detail-routing-module';

@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    CommonModule,

    DetailRoutingModule,
    SharedModule
  ]
})
export class DetailModule { }
