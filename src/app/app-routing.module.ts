import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';

const appDashboardModule = () => import('./views/app-dashboard/app-dashboard.module').then(m => m.AppDashboardModule);

let routes: Routes = [
	{ path: '', redirectTo: 'owambe', pathMatch: 'full' },
	{ path: 'owambe', loadChildren: appDashboardModule },
	{ path: 'login', component: LoginComponent},
	{ path: 'signup', component: SignupComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
