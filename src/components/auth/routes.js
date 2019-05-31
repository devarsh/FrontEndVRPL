import { UsernameHeader, UsernameBody } from './pages/username.js';
import { PasswordHeader, PasswordBody } from './pages/password.js';
import { OtpHeader, OtpBody } from './pages/otp.js';

export const KEY = 'key';

export const Routes = [
  {
    label: 'Email',
    key: 1,
    HeaderComponent: UsernameHeader,
    BodyComponent: UsernameBody,
    path: '/email'
  },
  {
    label: 'Otp',
    key: 5,
    HeaderComponent: OtpHeader,
    BodyComponent: OtpBody,
    path: '/otp'
  },
  {
    label: 'Password',
    key: 3,
    HeaderComponent: PasswordHeader,
    BodyComponent: PasswordBody,
    path: '/pwd'
  }
];
