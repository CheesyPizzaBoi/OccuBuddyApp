import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'usefulinfo',
    loadChildren: () => import('./usefulinfo/usefulinfo.module').then( m => m.UsefulinfoPageModule)
  },
  {
    path: 'jobslist',
    loadChildren: () => import('./jobslist/jobslist.module').then( m => m.JobslistPageModule)
  },
  {
    path: 'job-content',
    loadChildren: () => import('./job-content/job-content.module').then( m => m.JobContentPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
