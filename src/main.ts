import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Allow requests from the frontend
    methods: 'GET,HEAD,POST,PUT,DELETE,PATCH', // Specify allowed methods
    credentials: false, // If cookies or authorization headers are needed
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
