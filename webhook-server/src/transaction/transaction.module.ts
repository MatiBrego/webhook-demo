import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { WebhookModule } from '../webhook/webhook.module';

@Module({
  imports: [WebhookModule],
  providers: [TransactionService],
  controllers: [TransactionController],
})
export class TransactionModule {}
