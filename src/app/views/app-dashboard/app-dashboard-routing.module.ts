import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppDashboardComponent } from './app-dashboard.component';

let routes: Routes = [
	{ 
		path: '', component: AppDashboardComponent,
		children: []
	}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppDashboardRoutingModule { }
