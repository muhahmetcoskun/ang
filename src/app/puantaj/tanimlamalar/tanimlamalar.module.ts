import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TanimlamalarRoutingModule } from './tanimlamalar-routing.module';
import { TatilGunuTanimlaHomeComponent } from './tatil-gunu-tanimla-home/tatil-gunu-tanimla-home.component';



@NgModule({
  declarations: [
    TatilGunuTanimlaHomeComponent
  ],
  imports: [
 
    CommonModule,
    TanimlamalarRoutingModule,
    
  ],


exports: []
})
export class TanimlamalarModule { }
