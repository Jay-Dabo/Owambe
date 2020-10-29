import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
	public registerUserData:any = {}
    
    constructor(private _account: UserService, private _router: Router) { }

    registerUser() {
        this._account.registerUser(this.registerUserData)
        .subscribe (
        	res => {
                console.log(res)
                this._router.navigate(['/authentication/login'])
            },
        	error => {
                console.log(error)
                alert('Oops!! An error occured. Please try again.')
            }
        )
    }
	
	ngOnInit(): void {
    }
}
