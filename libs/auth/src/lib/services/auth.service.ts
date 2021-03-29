import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authenticate } from '@enterprise-angular/data-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(authenticate: Authenticate): Observable<any> {
    return this.http.post('http://localhost:3000/login', authenticate);
  }
}
