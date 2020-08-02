import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsefulinfoPageRoutingModule } from './usefulinfo-routing.module';

import { UsefulinfoPage } from './usefulinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsefulinfoPageRoutingModule
  ],
  declarations: [UsefulinfoPage]
})
export class UsefulinfoPageModule {}
