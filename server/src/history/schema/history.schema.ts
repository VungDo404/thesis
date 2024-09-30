import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HistoryDocument = HydratedDocument<History>;

@Schema()
export class History {
    x: number;
    y: number;
}

export const HistorySchema = SchemaFactory.createForClass(History);

