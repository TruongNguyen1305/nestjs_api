import { Module } from '@nestjs/common';
import { runModule } from './run/run.module';

@Module({
  imports: [runModule],
})
export class AppModule {}
