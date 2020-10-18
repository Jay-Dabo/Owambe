import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appDashboardModule = () => import('./views/app-dashboard/app-dashboard.module').then(m => m.AppDashboardModule);

let routes: Routes = [
	{ path: '', redirectTo: 'owambe', pathMatch: 'full' },
	{ path: 'owambe', loadChildren: appDashboardModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
