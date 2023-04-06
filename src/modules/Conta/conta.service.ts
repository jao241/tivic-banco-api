import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { Conta } from '@prisma/client';

@Injectable()
export class ContaService {
  constructor(private readonly prisma: PrismaService) {}

  async informaSaldo(id: string): Promise<Conta> {
    return await this.prisma.conta.findUnique({
      where: {
        id_cliente: id,
      },
    });
  }

  async realizaDeposito(id: string, valor: number): Promise<Conta> {
    const conta = await this.prisma.conta.findUnique({
      where: {
        id_cliente: id,
      },
    });

    const novoSaldo = conta.saldo + valor;

    return await this.prisma.conta.update({
      where: {
        id_cliente: id,
      },
      data: {
        saldo: novoSaldo,
      },
    });
  }

  async realizarSaque(id: string, valor: number): Promise<Conta> {
    const conta = await this.prisma.conta.findUnique({
      where: {
        id_cliente: id,
      },
    });

    if (valor > conta.saldo)
      throw new ConflictException(null, 'Saldo insuficiente!');

    const novoSaldo = conta.saldo - valor;

    return await this.prisma.conta.update({
      where: {
        id_cliente: id,
      },
      data: {
        saldo: novoSaldo,
      },
    });
  }
}
