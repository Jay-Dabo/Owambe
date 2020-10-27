import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userEmail;
  password;

  isVisible: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleVisibility(): void {
    let password = document.querySelector('.password');
    const type = password.getAttribute('type');
    type === 'password' ? password.setAttribute('type', 'text') : password.setAttribute('type', 'password')
    this.isVisible = !this.isVisible;
  }

  login(formvalues){
    console.log(formvalues);
  }
}
