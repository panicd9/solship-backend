import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './game.schema';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  // @Post('save')
  // async saveGame(@Body() gameData: Partial<Game>): Promise<string> {
  //   await this.gameService.saveGame(gameData);
  //   return 'Game state saved';
  // }

  @Get('load')
  async loadGame(@Query('selfPlayer') selfPlayer: any): Promise<Game> {
    return this.gameService.loadGame(selfPlayer);
  }

  @Post('upsert')
  async upsertGame(
    @Body('thisPlayer') thisPlayer: string,
    @Body('gamePubkey') gamePubkey: string,
    @Body('player1') player1: string,
    @Body('player2') player2: string,
    @Body('updateData') updateData: Partial<Game>,
  ): Promise<Game> {
    console.log('Upserting game for player: ', thisPlayer);
    console.log('Upserting game with data: ', updateData);

    return this.gameService.upsertGame(
      thisPlayer,
      gamePubkey,
      player1,
      player2,
      updateData,
    );
  }
}
