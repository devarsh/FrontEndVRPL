import { LoginHeader, LoginBody } from './pages/login.js';
import { ForgotHeader, ForgotBody } from './pages/forgot.js';

export const KEY = 'key';

export const Routes = [
  {
    label: 'Login',
    key: 1,
    HeaderComponent: LoginHeader,
    BodyComponent: LoginBody,
    path: '/login',
    protected: false
  },
  {
    label: 'Forgot',
    key: 2,
    HeaderComponent: ForgotHeader,
    BodyComponent: ForgotBody,
    path: '/forgot',
    protected: true,
    redirect: '/login'
  }
];
