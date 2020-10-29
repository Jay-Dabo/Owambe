import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppDashboardComponent } from './app-dashboard.component';
import { HomeComponent } from './home/home.component';

const fundraiserModule = () => import('./fundraiser/fundraiser.module').then(m => m.FundraiserModule);

let routes: Routes = [
	{ 
		path: '', component: AppDashboardComponent,
		children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            { path: 'home', component: HomeComponent },
            { path: 'fundraisers', loadChildren: fundraiserModule }
		]
	}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppDashboardRoutingModule { }
