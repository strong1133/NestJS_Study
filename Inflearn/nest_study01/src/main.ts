import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/res/allExceptionsFiltter';

import { ResponseInterceptor } from './common/res/responseInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const httpAdapter = app.get(HttpAdapterHost);
  const PORT = process.env.PORT;
  console.log(PORT);

  app.useGlobalPipes(new ValidationPipe()); // Class Validation
  app.useGlobalInterceptors(new ResponseInterceptor()); // Response Dto
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter)); // Global Exception

  await app.listen(PORT);
}
bootstrap();
