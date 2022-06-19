import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PositivePipe implements PipeTransform {
  transform(value: number) {
    console.log('PositivePipe', value);
    return value;
  }
}
