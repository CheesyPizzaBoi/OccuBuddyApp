import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobContentPage } from './job-content.page';

const routes: Routes = [
  {
    path: '',
    component: JobContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobContentPageRoutingModule {}
