import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookModule } from './webhook/webhook.module';
import { TransactionModule } from './transaction/transaction.module';
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [WebhookModule, TransactionModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
