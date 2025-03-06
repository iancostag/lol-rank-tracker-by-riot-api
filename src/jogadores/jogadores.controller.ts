import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JogadoresService } from './jogadores.service';
import { CreateJogadoreDto } from './dto/create-jogadore.dto';
import { UpdateJogadoreDto } from './dto/update-jogadore.dto';
import { Jogadore } from './entities/jogadore.entity';

@Controller('jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post('criar-por-riot')
  async criarPelaRiotApi(
    @Body() jogadorDTO : CreateJogadoreDto,
  ) :Promise<Jogadore> {
    return this.jogadoresService.criarPelaRiotApi(jogadorDTO);
  }


  @Get()  
  findAll() {
    return this.jogadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') puuid: string) {
    return this.jogadoresService.findOne(puuid);
  }

  @Patch(':id')
  update(@Param('id') puuid: string, @Body() updateJogadoreDto: UpdateJogadoreDto) {
    return this.jogadoresService.update(puuid, updateJogadoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jogadoresService.remove(+id);
  }
}
