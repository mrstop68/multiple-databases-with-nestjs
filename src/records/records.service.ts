import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RecordPostgres } from './entities/record.entity';
import { RecordMongo } from './schemas/record.schema';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(RecordPostgres)
    private readonly RecordPostgresRepository: Repository<RecordPostgres>,
    @InjectModel('Record')
    private readonly mongoModel: Model<RecordMongo>,
  ) { }

  async findAll(): Promise<any> {
    const postgresRecords = await this.RecordPostgresRepository.find();
    const mongoRecords = await this.mongoModel.find().exec();

    return {
      postgres: postgresRecords,
      mongo: mongoRecords,
    };
  }

  async createRecord(data: any): Promise<any> {
    const postgresRecord = this.RecordPostgresRepository.create(data);
    const savedPostgresRecord = await this.RecordPostgresRepository.save(postgresRecord);

    const mongoRecord = new this.mongoModel(data);
    const savedMongoRecord = await mongoRecord.save();

    return {
      postgres: savedPostgresRecord,
      mongo: savedMongoRecord,
    };
  }
}
