import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TanimlamalarRoutingModule } from './tanimlamalar-routing.module';
import { TatilGunuTanimlaHomeComponent } from './tatil-gunu-tanimla-home/tatil-gunu-tanimla-home.component';
import { HttpService } from 'src/app/services/http.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, JwtInterceptor } from 'src/app/helpers';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
  ],
  imports: [

    CommonModule,
    TanimlamalarRoutingModule,
    HttpClientModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
   // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  exports: []
})
export class TanimlamalarModule { }
