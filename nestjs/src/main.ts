import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4003;
  console.log('NESTjs listening at http://localhost:' + port);
  await app.listen(port);
}
bootstrap();
