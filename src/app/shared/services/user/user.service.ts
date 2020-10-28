import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AccountService {

    constructor(private _http: HttpClient, private _router: Router) {}

    registerUser(user) {
        return this._http.post<any>(`${environment.apiUrl}/authentication/register`, user)
    }

    loginUser(user) {
        return this._http.post<any>(`${environment.apiUrl}/authentication/login`, user)
    }

    loggedIn() {
        return !!sessionStorage.getItem('token')
    }

    logOutUser() {
        sessionStorage.removeItem('token')
        localStorage.removeItem('user')
        this._router.navigate(['/authentication/login'])
    }

    getToken() {
        return sessionStorage.getItem('token')
    }

    getUser(_id: string) {
        return this._http.get<any>(`${environment.apiUrl}/users/${_id}`)
    }

    getUsers() {
        return this._http.get<any>(`${environment.apiUrl}/users/`)
    }

    updateUser(_id: string, user) {
        return this._http.patch(`${environment.apiUrl}/users/${_id}`, user)
    }
}
