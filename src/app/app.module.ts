import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppsListComponent } from './apps-list/apps-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SplashPageComponent,
    AppsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
