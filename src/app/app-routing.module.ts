import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appDashboardModule = () => import('./views/app-dashboard/app-dashboard.module').then(m => m.AppDashboardModule);

let routes: Routes = [
	{ path: '', redirectTo: 'app-dashboard', pathMatch: 'full' },
	{ path: 'app-dashboard', loadChildren: appDashboardModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
