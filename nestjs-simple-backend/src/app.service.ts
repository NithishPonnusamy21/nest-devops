import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  // EXISTING
  getHello(): string {
    return 'Hello From nithish,hi how are you';
  }

  // USED BY /db-check
  async checkDb() {
    await this.dataSource.query('SELECT 1');
    return {
      status: 'ok',
      db: 'connected',
    };
  }
}
