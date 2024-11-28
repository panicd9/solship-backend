import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Game extends Document {
  @Prop({ type: String, required: true })
  gamePubkey: string;

  @Prop({ type: String, required: true })
  thisPlayer: string;

  @Prop({ type: String, required: true })
  player1: string;

  @Prop({ type: String, required: true })
  player2: string;

  @Prop({ type: Number })
  turn: number;

  @Prop({ type: Array })
  table: any[];

  @Prop({ type: Array })
  fieldsEnemyAttacked: any[];

  @Prop({ type: Array })
  attackedFields: any[];

  @Prop({ type: Array })
  enemyShips: any[];
}

export const GameSchema = SchemaFactory.createForClass(Game);

// Add a unique index to the combination of fields
GameSchema.index(
  { gamePubkey: 1, thisPlayer: 1, player1: 1, player2: 1 },
  { unique: true },
);
