import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appDashboardModule = () => import('./views/app-dashboard/app-dashboard.module').then(m => m.AppDashboardModule);
const authenticationModule = () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule);

let routes: Routes = [
	{ path: '', loadChildren: appDashboardModule },
	{ path: 'authentication', loadChildren: authenticationModule }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
