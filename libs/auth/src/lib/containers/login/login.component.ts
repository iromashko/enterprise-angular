import { Component } from '@angular/core';

@Component({
  selector: 'enterprise-angular-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login(authenticate: any) {
    console.log(authenticate);
  }
}
