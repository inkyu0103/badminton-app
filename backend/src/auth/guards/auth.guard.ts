import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from 'users/users.service';
import { LoginFormData } from 'auth/types/auth.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LocalGuard implements CanActivate {
  constructor(private readonly usersService: UsersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const { email, password }: LoginFormData = request.body;

    const user = await this.usersService.getUser(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return false;
    }

    return true;
  }
}
