import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobContentPageRoutingModule } from './job-content-routing.module';

import { JobContentPage } from './job-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobContentPageRoutingModule
  ],
  declarations: [JobContentPage]
})
export class JobContentPageModule {}
