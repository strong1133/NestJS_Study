import { Controller, Get, HttpException, Post, Put } from '@nestjs/common';
import {
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { PositivePipe } from 'src/common/pipes/positivePipe';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return ' current Cat';
  }

  @Post()
  async singUp() {
    return 'singUp';
  }

  @Post('login')
  logIn() {
    return 'login';
  }

  @Post('logout')
  logOut() {
    return 'logOut';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'upLoadImg';
  }
}
