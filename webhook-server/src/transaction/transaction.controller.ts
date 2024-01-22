import { Controller, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Cron } from "@nestjs/schedule";

@Controller('transaction')
export class TransactionController {
  constructor(private readonly service: TransactionService) {}

  @Cron('*/5 * * * * *')
  async start() {
    await this.service.newTransaction();
  }
}
