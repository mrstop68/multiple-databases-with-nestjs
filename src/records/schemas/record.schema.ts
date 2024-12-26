import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class RecordMongo extends Document {
    @Prop()
    name: string;

    @Prop()
    location: string;

    @Prop()
    phone: string;

    @Prop()
    email: string;

}

export const RecordSchema = SchemaFactory.createForClass(RecordMongo);
