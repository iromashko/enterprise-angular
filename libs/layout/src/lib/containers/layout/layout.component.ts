import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@enterprise-angular/data-models';
import { AuthService } from '@enterprise-angular/auth';

@Component({
  selector: 'enterprise-angular-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit{
  user$: Observable<User>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}
