import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Authenticate } from '@enterprise-angular/data-models';
import { Store } from '@ngrx/store';
import { login } from '../../+state/auth.actions';
import { AuthState } from '../../+state/auth.reducer';

@Component({
  selector: 'enterprise-angular-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private store: Store<AuthState>) {}

  login(authenticate: Authenticate) {
    this.store.dispatch(login({ payload: authenticate }));
  }
}
