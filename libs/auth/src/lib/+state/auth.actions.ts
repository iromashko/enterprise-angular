import { Authenticate, User } from '@enterprise-angular/data-models';
import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth Page] Login',
  LoginSuccess = '[Auth Page] Login Success',
  LoginFail = '[Auth Page] Login Fail',
}

export const login = createAction(
  AuthActionTypes.Login,
  props<{ payload: Authenticate }>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LoginSuccess,
  props<{ payload: User }>()
);

export const loginFailure = createAction(
  AuthActionTypes.LoginFail,
  props<{ payload: any }>()
);
