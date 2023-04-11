import { Controller, Get, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get('/:id')
  buscaCliente(@Param('num_conta') num_conta: string) {
    return this.clienteService.buscaCliente(num_conta);
  }
}
