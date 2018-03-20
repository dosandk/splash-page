import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { AppsListComponent } from './apps-list/apps-list.component';

//  TODO: maybe we will have routes for all existed apps but will show only those to which the user has access
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'splash-page',
    component: SplashPageComponent,
    children: [{ path: 'apps-list', component: AppsListComponent}]
  },
  // TODO: implement lazy-loading for few apps
  {
    path: 'reports',
    loadChildren: 'app/applications/reports.module#ReportsModule',
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
