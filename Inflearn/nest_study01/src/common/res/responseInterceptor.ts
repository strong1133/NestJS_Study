import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Timestamp } from '../utils/timestamp';
import { ResponseDto } from './responseDto';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseDto<T>> {
    console.log('RES INTERCEPTOR');
    const http = context.switchToHttp();
    const res = http.getResponse();
    return next.handle().pipe(
      map((data) => ({
        timestamp: new Timestamp(Date.now()).time,
        statusCode: res.statusCode,
        errFlag: false,
        errMsg: '',
        data: data,
      })),
    );
  }
}
