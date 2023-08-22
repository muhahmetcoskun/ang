import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TatilGunuTanimlaHomeComponent } from './tatil-gunu-tanimla-home/tatil-gunu-tanimla-home.component';





@NgModule({


  imports: [RouterModule.forChild([
    { path: 'tatilgunutanimla', component: TatilGunuTanimlaHomeComponent },
  ])],
  exports: [RouterModule]
})
export class TanimlamalarRoutingModule { }
