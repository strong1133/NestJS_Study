import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorsInterceptor } from './common/res/errorInterceptor';
import { ResponseInterceptor } from './common/res/responseInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT;
  console.log(PORT);

  app.useGlobalInterceptors(new ResponseInterceptor());
  // app.useGlobalFilters(new ErrorsInterceptor());
  await app.listen(PORT);
}
bootstrap();
