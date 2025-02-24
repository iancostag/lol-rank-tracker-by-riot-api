import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogadoresService } from './jogadores.service';
import { JogadoresController } from './jogadores.controller';
import { Jogadore } from './entities/jogadore.entity';
import { RiotApiService } from 'src/riot-api/riot-api.service';

@Module({
  imports: [TypeOrmModule.forFeature([Jogadore])], // Registro do repositório Jogadore aqui
  controllers: [JogadoresController],
  providers: [JogadoresService, RiotApiService],
})
export class JogadoresModule {}
