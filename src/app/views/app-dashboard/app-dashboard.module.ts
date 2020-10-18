import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDashboardComponent } from './app-dashboard.component';
import { AppDashboardRoutingModule } from './app-dashboard-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [AppDashboardComponent, HomeComponent],
  imports: [
    CommonModule,
    AppDashboardRoutingModule
  ]
})
export class AppDashboardModule { }
