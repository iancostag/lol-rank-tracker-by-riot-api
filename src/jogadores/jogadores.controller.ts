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
    @Body() data: {gameName:string, tagLine:string},
  ) :Promise<Jogadore> {
    return this.jogadoresService.criarPelaRiotApi(data.gameName,data.tagLine);
  }

  @Post('criar')

  @Get()  
  findAll() {
    return this.jogadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jogadoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJogadoreDto: UpdateJogadoreDto) {
    return this.jogadoresService.update(+id, updateJogadoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jogadoresService.remove(+id);
  }
}
