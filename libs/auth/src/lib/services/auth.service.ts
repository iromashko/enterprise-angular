import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authenticate, User } from '@enterprise-angular/data-models';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<User>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(authenticate: Authenticate): Observable<User> {
    return this.http
      .post<User>('http://localhost:3000/login', authenticate)
      .pipe(tap((user: User) => this.userSubject.next(user)));
  }
}
