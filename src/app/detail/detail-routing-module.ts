import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DetailPageComponent } from "./containers/detailpage/detail-page.component";

const routes: Routes = [
  {
    path: 'id',
    component: DetailPageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class DetailRoutingModule {}
