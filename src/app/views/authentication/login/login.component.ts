import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public loginUserData:any = {}
	public userData:any = {}

	constructor(private _account: UserService, private _router: Router) { }

	ngOnInit(): void {
	}

	clickFunctions(){
		this.loginUser();
	}

	loginUser() {
		this._account.loginUser(this.loginUserData)
		.subscribe (
			res => {
						console.log(res)
						sessionStorage.setItem('token', res.token)
						this._router.navigate(['/'])

						this._account.getUser(this.loginUserData._id)
						.subscribe (
							res => {
								this.userData = res
								console.log(this.userData)
								localStorage.setItem('user', JSON.stringify(this.userData))
							}
						)
				},
			error => {
				console.log(error)
				alert('Oops!! An error occured. Please try again later')
			}
		)
	}
}
