import { Module } from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordsController } from './records.controller';


import { RecordPostgres } from './entities/record.entity';
import { RecordSchema } from './schemas/record.schema';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    TypeOrmModule.forFeature([RecordPostgres]), // PostgreSQL için
    MongooseModule.forFeature([{ name: 'Record', schema: RecordSchema }]), // MongoDB için
  ],
  controllers: [RecordsController],
  providers: [RecordsService],
})
export class RecordsModule { }
