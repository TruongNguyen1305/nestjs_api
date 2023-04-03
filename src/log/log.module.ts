import { Module } from '@nestjs/common';
import { runController } from './run.controller';
import { runService } from './run.service';

@Module({
  controllers: [runController],
  providers: [runService]
})
export class runModule {}
