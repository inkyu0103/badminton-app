import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class PagenationPipe implements PipeTransform {
  transform(value: number) {
    if (value <= 0) return 1;

    if (typeof value !== 'number') throw new BadRequestException();

    return value - 1;
  }
}
