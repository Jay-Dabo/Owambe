import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    MatSelectCountryModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthenticationModule { }
