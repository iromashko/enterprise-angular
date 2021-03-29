import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { Authenticate } from '@enterprise-angular/data-models';

@Component({
  selector: 'enterprise-angular-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<Authenticate>();

  login(authenticate: Authenticate) {
    this.submit.emit(authenticate);
  }
}
