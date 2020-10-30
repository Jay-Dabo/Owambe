import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
 	providedIn: 'root'
})
export class FundraiserService {

	constructor(private _http: HttpClient) { }

	getFundraisers(){
		return this._http.get<any>(`${environment.apiUrl}/fundraisers`)
	}
}
