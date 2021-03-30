import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authenticate } from '@enterprise-angular/data-models';

@Component({
  selector: 'enterprise-angular-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<Authenticate>();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  login() {
    this.submit.emit({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    } as Authenticate);
  }
}
