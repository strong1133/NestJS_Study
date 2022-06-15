import { Timestamp } from '../utils/timestamp';

export class ResponseDto<T> {
  readonly timestamp: string = new Timestamp(Date.now()).time;
  statusCode: string;
  errFlag: boolean;
  errMsg: string;
  data: T;

  constructor(statusCode: string, errFlag: boolean, errMsg: string, data: T) {
    this.statusCode = statusCode ?? '200';
    this.errFlag = errFlag ?? false;
    this.errMsg = errMsg ?? '';
    this.data = data;
  }
}
