import { Body, Controller, Post } from '@nestjs/common';

@Controller('transaction')
export class TransactionController {
  @Post('log')
  log(@Body() transaction: { account: number; amount: number }) {
    console.log(transaction);
  }
}
