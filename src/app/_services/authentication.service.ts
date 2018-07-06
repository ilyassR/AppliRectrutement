import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {
    public redirectUrl: string = '';
    /*
    The BehaviorSubject keeps the latest value cached (in our case when the service is created the initial value is going to be false). 
    So when an Observer subscribes to the isLoggedIn(), the cached valued is going to be emitted right away.
     */
    private loggedIn = new BehaviorSubject<boolean>(false); // {1}

    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
    }

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('/api/authenticate/signin', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.accessToken) {
                    console.log("logged successfully");
                    this.loggedIn.next(true);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                if (user.token) {
                    console.log("user.token" + user.token);
                    this.loggedIn.next(true);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                console.log(user);
                return user;
            });
    }

    logout() {
        this.loggedIn.next(false);
        // remove user from local storage to log user out
        localStorage.removeItem('userPrincipal');
        localStorage.removeItem('currentUser');
    }

    validateToken() {
        console.log("validateToken");
        this.loggedIn.next(true);
    }
}
