import { Injectable } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class RiotApiService {
  private readonly chave = "RGAPI-05aae432-0680-4192-8d10-62bbdf68a436";

  constructor() {
    console.log('Chave da API:', this.chave); // Log para verificar a chave da API
  }

  async dadosJogador(gameName: string, tagLine: string): Promise<any> {
    const URL = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
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


