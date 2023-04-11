import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContaModule } from './modules/Conta/conta.module';
import { ClienteModule } from './modules/Cliente/cliente.module';

@Module({
  imports: [ContaModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
