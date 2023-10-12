import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './containers/home/home-page.component';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './services/home.service';
@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, SharedModule, HttpClientModule, HomeRoutingModule],
  providers: [HomeService],
})
export class HomeModule {}
