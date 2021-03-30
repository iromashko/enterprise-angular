import { Component } from '@angular/core';
import { AuthService } from '@enterprise-angular/auth';

@Component({
  selector: 'enterprise-angular-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  user$ = this.authService.user$;

  constructor(private authService: AuthService) {}
}
