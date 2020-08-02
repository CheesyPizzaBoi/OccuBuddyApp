import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsefulinfoPage } from './usefulinfo.page';

const routes: Routes = [
  {
    path: '',
    component: UsefulinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsefulinfoPageRoutingModule {}
