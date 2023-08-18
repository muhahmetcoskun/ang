import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





@NgModule({
  imports: [RouterModule.forChild([
    { path: 'tatilgunutanimla', loadChildren: () => import('./tatil-gunu-tanimla/tatil-gunu-tanimla.module').then(m => m.TatilGunuTanimlaModule) }
  
	])],
  exports: [RouterModule]
})
export class TanimlamalarRoutingModule { }
