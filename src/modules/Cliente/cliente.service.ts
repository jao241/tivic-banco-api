import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { Cliente } from '@prisma/client';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}

  async buscaCliente(num_conta: string): Promise<Cliente> {
    const cliente = await this.prisma.cliente.findFirst({
      where: {
        numero_conta: num_conta,
      },
    });

    return cliente;
  }
}
