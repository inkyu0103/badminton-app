import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  constructor(loginForm: { email: string; password: string }) {
    this.email = loginForm.email;
    this.password = loginForm.password;
  }
}
