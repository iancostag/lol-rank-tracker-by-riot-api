import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JogadoresModule } from './jogadores/jogadores.module';
import { RiotApiService } from './riot-api/riot-api.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [__dirname+'/**/*.entity{.js,.ts}'],
    synchronize: true,
  }),
  JogadoresModule],
  controllers: [AppController],
  providers: [AppService, RiotApiService],
})
export class AppModule {}
