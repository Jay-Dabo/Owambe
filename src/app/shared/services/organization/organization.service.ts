import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class OrganizationService {

    constructor(private _http: HttpClient, private _router: Router) {}

    registerOrganization(organization) {
        return this._http.post<any>(`${environment.apiUrl}/organization/register`, organization)
    }

    loginOrganization(organization) {
        return this._http.post<any>(`${environment.apiUrl}/organization/login`, organization)
    }

    loggedIn() {
        return !!sessionStorage.getItem('token')
    }

    logOutOrganization() {
        sessionStorage.removeItem('token')
        localStorage.removeItem('organization')
        this._router.navigate(['/authentication/login'])
    }

    getToken() {
        return sessionStorage.getItem('token')
    }

    getOrganization(_id: string) {
        return this._http.get<any>(`${environment.apiUrl}/organizations/${_id}`)
    }

    getOrganizations() {
        return this._http.get<any>(`${environment.apiUrl}/organizations`)
    }

    updateOrganization(_id: string, organization) {
        return this._http.patch(`${environment.apiUrl}/organizations/${_id}`, organization)
    }
}
