import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ContaService } from './conta.service';

@Controller('conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Get('/verificar/:id')
  informaSaldo(@Param('id') id: string) {
    return this.contaService.informaSaldo(id);
  }

  @Put('/depositar/:id')
  realizaDeposito(@Param('id') id: string, @Body('valor') valor: number) {
    return this.contaService.realizaDeposito(id, valor);
  }

  @Put('/sacar/:id')
  realizarSaque(@Param('id') id: string, @Body('valor') valor: number) {
    return this.contaService.realizarSaque(id, valor);
  }
}
