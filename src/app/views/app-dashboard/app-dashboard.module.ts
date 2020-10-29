import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppDashboardComponent } from './app-dashboard.component';
import { AppDashboardRoutingModule } from './app-dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [AppDashboardComponent, HomeComponent, ProfileComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgScrollbarModule,
    AppDashboardRoutingModule,
    LayoutsModule
  ]
})
export class AppDashboardModule { }
