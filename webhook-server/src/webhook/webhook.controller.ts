import { Body, Controller, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly service: WebhookService) {}

  @Post('suscribe')
  suscribe(@Body() body: { url: string }) {
    console.log(body);
    this.service.subscribe(body.url);
  }
}
