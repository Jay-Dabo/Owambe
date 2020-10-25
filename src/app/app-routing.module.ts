import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
