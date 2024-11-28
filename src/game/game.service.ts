import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game } from './game.schema';

@Injectable()
export class GameService {
  constructor(@InjectModel(Game.name) private gameModel: Model<Game>) {}

  // async saveGame(gameData: Partial<Game>): Promise<Game> {
  //   const game = new this.gameModel(gameData);
  //   return game.save();
  // }

  async loadGame(selfPlayer: any): Promise<Game> {
    console.log('Loading game for player: ', selfPlayer);
    const game = this.gameModel
      .findOne({
        thisPlayer: selfPlayer,
      })
      .sort({ _id: -1 })
      .exec();

    console.log('Loading game: ', game);

    return game;
  }

  async upsertGame(
    thisPlayer: any,
    gamePubkey: any,
    player1: any,
    player2: any,
    updateData: Partial<Game>,
  ): Promise<Game> {
    return this.gameModel
      .findOneAndUpdate(
        { thisPlayer, gamePubkey, player1, player2 },
        { $set: updateData },
        { new: true, upsert: true },
      )
      .exec();
  }
}
