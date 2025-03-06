import { Injectable } from '@nestjs/common';
import { CreateJogadoreDto } from 'src/jogadores/dto/create-jogadore.dto';
import axios from 'axios';


@Injectable()
export class RiotApiService {
  private readonly chave = "RGAPI-2fc39f75-c385-4434-b615-64f3754b8fb1";

  constructor() {
    console.log('Chave da API:', this.chave); // Log para verificar a chave da API
  }

  async dadosJogador(jogadorDTO : CreateJogadoreDto): Promise<any> {
    const URL = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${jogadorDTO.gameName}/${jogadorDTO.tagLine}`;
    console.log("URL:", URL);
  
    try {
      console.log(this.chave);
      const resposta = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.chave, // Adicionando o cabeçalho correto
        },
      });
      console.log(resposta.data);
      return resposta.data;
    } catch (error) {
      console.error('Erro ao consultar a Riot API:', error.response ? error.response.data : error.message);
      throw new Error('Erro ao consultar a API da Riot');
    }
  }
  
}


