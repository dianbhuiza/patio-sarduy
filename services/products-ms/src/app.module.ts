import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './config/env';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.DB_HOST,
      port: env.DB_PORT,
      username: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
      autoLoadEntities: true,
      synchronize: env.NODE_ENV !== 'production',
    }),
    ProductsModule
  ],
})
export class AppModule {}
