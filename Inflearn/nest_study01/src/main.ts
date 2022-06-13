import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseDto } from './common/res/ResponseDto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT;
  console.log(PORT);

  app.useGlobalInterceptors(new ResponseDto());
  await app.listen(PORT);
}
bootstrap();
