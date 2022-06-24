import { Body, Controller, Get, Post } from '@nestjs/common';
import { PositivePipe } from 'src/common/pipes/positivePipe';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/catsRequestDto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return ' current Cat';
  }

  @Post()
  async singUp(@Body() body: CatRequestDto) {
    console.log(body);
    return body;
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
