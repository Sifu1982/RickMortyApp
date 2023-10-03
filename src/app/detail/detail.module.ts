import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DetailPageComponent } from './containers/detailpage/detail-page.component';

@NgModule({
  declarations: [DetailPageComponent],
  imports: [CommonModule, SharedModule],
})
export class DetailModule {}
