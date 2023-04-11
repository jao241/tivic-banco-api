import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class ContaService {
  constructor(private readonly prisma: PrismaService) {}

  async informaSaldo(id: string): Promise<number> {
    const conta = await this.prisma.conta.findUnique({
      where: {
        id_cliente: id,
      },
    });

    return conta.saldo;
  }

  async realizaDeposito(id: string, valor: number): Promise<number> {
    const conta = await this.prisma.conta.findUnique({
      where: {
        id_cliente: id,
      },
    });

    const novoSaldo = conta.saldo + valor;

    const contaAtualizada = await this.prisma.conta.update({
      where: {
        id_cliente: id,
      },
      data: {
        saldo: novoSaldo,
      },
    });

    return contaAtualizada.saldo;
  }

  async realizarSaque(id: string, valor: number): Promise<number> {
    const conta = await this.prisma.conta.findUnique({
      where: {
        id_cliente: id,
      },
    });

    if (valor > conta.saldo)
      throw new ConflictException(null, 'Saldo insuficiente!');

    const novoSaldo = conta.saldo - valor;

    const contaAtualizada = await this.prisma.conta.update({
      where: {
        id_cliente: id,
      },
      data: {
        saldo: novoSaldo,
      },
    });

    return contaAtualizada.saldo;
  }
}
