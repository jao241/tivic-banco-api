import { Module } from '@nestjs/common';
import { ContaController } from './conta.controller';
import { ContaService } from './conta.service';
import { PrismaService } from '../db/prisma.service';

@Module({
  imports: [],
  controllers: [ContaController],
  providers: [ContaService, PrismaService],
})
export class ContaModule {}
