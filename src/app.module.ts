import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContaModule } from './modules/Conta/conta.module';

@Module({
  imports: [ContaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
