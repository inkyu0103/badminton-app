import {
  CanActivate,
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ClubsGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const { params, user } = context.switchToHttp().getRequest();

    if (Number(params.userId) !== user.userId) {
      throw new UnauthorizedException('올바른 요청이 아닙니다.');
    }

    return true;
  }
}
