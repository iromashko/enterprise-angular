import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'enterprise-angular-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login(authenticate: any) {
    this.authService.login(authenticate).subscribe();
  }
}
