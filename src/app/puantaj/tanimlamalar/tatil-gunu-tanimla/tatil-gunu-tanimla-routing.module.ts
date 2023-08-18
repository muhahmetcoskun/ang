import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TatilGunuTanimlaHomeComponent } from '../tatil-gunu-tanimla-home/tatil-gunu-tanimla-home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: TatilGunuTanimlaHomeComponent }
])],
  exports: [RouterModule]
})
export class TatilGunuTanimlaRoutingModule { }
