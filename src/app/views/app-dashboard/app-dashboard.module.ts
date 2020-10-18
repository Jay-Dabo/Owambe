import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDashboardComponent } from './app-dashboard.component';
import { AppDashboardRoutingModule } from './app-dashboard-routing.module';



@NgModule({
  declarations: [AppDashboardComponent],
  imports: [
    CommonModule,
    AppDashboardRoutingModule
  ]
})
export class AppDashboardModule { }
