import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FundraiserService } from 'src/app/shared/services';
import { UserService } from 'src/app/shared/services';

@Component({
	selector: 'app-all',
	templateUrl: './all.component.html',
	styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
	public fundraisers:any = [];
	public categories:any = [];


	constructor(private _account: UserService, private _fundraiser: FundraiserService, private _router: Router) { }

	getFundraisers(){
		this._fundraiser.getFundraisers()
		.subscribe(
			res => {
				this.fundraisers = res
				this.categories = Object.assign({}, this.fundraisers.categories)
				console.log(this.fundraisers)
			},
			err => {
				if(err instanceof HttpErrorResponse) {
		        	if (err.status === 401) {
		            	this._router.navigate(['/'])
		          	}
		        }
			}
		)
	}

	ngOnInit(): void {
		this.getFundraisers();
	}

}
