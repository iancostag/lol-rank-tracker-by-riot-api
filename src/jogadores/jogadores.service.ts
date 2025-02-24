import { Injectable } from '@nestjs/common';
import { CreateJogadoreDto } from './dto/create-jogadore.dto';
import { Repository } from 'typeorm';
import { Jogadore } from './entities/jogadore.entity';
import { UpdateJogadoreDto } from './dto/update-jogadore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RiotApiService } from 'src/riot-api/riot-api.service';
import { Logger } from '@nestjs/common';

@Injectable()
export class JogadoresService {
  
  constructor(
    @InjectRepository(Jogadore)
    private jogadoreRepository : Repository<Jogadore>,
    private riotService: RiotApiService,
  ){}

  private readonly logger = new Logger(JogadoresService.name);
  
  async criarPelaRiotApi(tagLine :string, gameName:string){

    try{
      const dadosRiot = await this.riotService.dadosJogador(tagLine,gameName); 

      await this.jogadoreRepository.save(dadosRiot);
      return dadosRiot;
    }catch(Error){
        this.logger.log(Error);
    }
  }

  findAll() {
    return `This action returns all jogadores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jogadore`;
  }

  update(id: number, updateJogadoreDto: UpdateJogadoreDto) {
    return `This action updates a #${id} jogadore`;
  }

  remove(id: number) {
    return `This action removes a #${id} jogadore`;
  }
}
