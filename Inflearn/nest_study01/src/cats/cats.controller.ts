import { Controller, Get, HttpException, Post, Put } from '@nestjs/common';
import {
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    console.log('Hello Cats Controller');
    throw new HttpException('api, is broken', 401);
    return { cats: 'get all cats Api' };
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log('GET One Cats : ', param);
    console.log(typeof param);
    return 'get one cat api';
  }

  @Post()
  createCat() {
    return 'create cat api';
  }

  @Put(':id')
  updateCat() {
    return 'update cat api';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update partial cat api';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
