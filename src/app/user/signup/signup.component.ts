import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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
}
