import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) { }

  @Get()
  async getRecords(): Promise<any> {
    return this.recordsService.findAll();
  }

  @Post()
  async createRecord(@Body() data: any): Promise<any> {
    return this.recordsService.createRecord(data);
  }
}
