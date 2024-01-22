import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class WebhookService {
  private subscribers: string[];

  constructor(private readonly httpService: HttpService) {
    this.subscribers = [];
  }

  subscribe(url: string) {
    this.subscribers.push(url);
  }

  async notify(body: Record<string, any>) {
    for (const subscriber of this.subscribers) {
      await this.httpService.axiosRef.post(subscriber, body);
    }
  }
}
