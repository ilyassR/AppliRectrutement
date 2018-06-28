import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

import { User } from '../_models/user';
import { UserPrincipal } from '../_models/userPrincipal';

@Injectable()
export class UserService {
  private messageSource = new BehaviorSubject(localStorage.getItem('userPrincipal'));
  currentPrincipalUser = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }


  getAll() {
    return this.http.get<User[]>('/api/users');
  }

  getUser(): Observable<UserPrincipal> {
    return this.http.get<UserPrincipal>('/api/home/user');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(user: User) {
    return this.http.post('/api/authenticate/signup', user);
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }
}
