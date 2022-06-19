import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PositivePipe implements PipeTransform {
  transform(value: number) {
    // console.log('PositivePipe', value);

    if (value <= 0) {
      throw new HttpException('Id는 0 보다 작을 수 없습니다.', 400);
    }
    return value;
  }
}
