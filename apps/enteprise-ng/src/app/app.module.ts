import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/angular';

import { AppComponent } from './app.component';
import { AuthModule } from '@enterprise-angular/auth';
import { authRoutes } from '@enterprise-angular/auth';
import { LayoutModule } from '@enterprise-angular/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot([{ path: 'auth', children: authRoutes }], {
      initialNavigation: 'enabled',
    }),
    AuthModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
