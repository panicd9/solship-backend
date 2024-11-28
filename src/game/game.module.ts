import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { Game, GameSchema } from './game.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
  ],
  providers: [GameService],
  controllers: [GameController],
})
export class GameModule {}
