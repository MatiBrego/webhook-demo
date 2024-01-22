import { Injectable } from '@nestjs/common';
import { WebhookService } from '../webhook/webhook.service';

@Injectable()
export class TransactionService {
  constructor(private readonly webhookService: WebhookService) {}

  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async newTransaction(): Promise<void> {
    const newTransaction = this.generateNewTransaction();
    await this.notify(newTransaction);
    console.log(newTransaction);
  }

  private generateNewTransaction(): { account: number; amount: number } {
    return { account: 123456789, amount: Math.random() * 100 };
  }

  private async notify(transaction: { account: number; amount: number }) {
    await this.webhookService.notify(transaction);
  }
}
