import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class PositivePipe implements PipeTransform {
  transform(value: number, metadata: ArgumentMetadata) {
    if (value > 0) {
      return value;
    }

    throw new BadRequestException();
  }
}
