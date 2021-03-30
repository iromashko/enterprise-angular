import { Component } from '@angular/core';
import { AuthState } from '@enterprise-angular/auth';
import { Store } from '@ngrx/store';
import * as AuthActions from '@enterprise-angular/auth';

@Component({
  selector: 'enterprise-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'enteprise-ng';

  constructor(private store: Store<AuthState>) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.store.dispatch(AuthActions.loginSuccess(user));
    }
  }
}
