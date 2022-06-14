import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Timestamp } from '../utils/timestamp';

export interface Response<T> {
  timestamp: string;
  statusCode: string;
  data: T;
}
@Injectable()
export class ResponseDto<T> implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    console.log('RES INTERCEPTOR');
    const http = context.switchToHttp();
    const res = http.getResponse();

    return next.handle().pipe(
      map((data) => ({
        timestamp: new Timestamp(Date.now()).time,
        statusCode: res.statusCode,
        data: data,
      })),
    );
  }
}
