import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './puantaj/auth/auth.module';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { ToastModule } from 'primeng/toast';




@NgModule({
    declarations: [
        AppComponent  , NotFoundComponent,
        UnauthorizedComponent,  
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ToastModule
        // AuthModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
     
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
