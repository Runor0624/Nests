import { Module } from '@nestjs/common'
import { AlphasService } from './alphas.service'
import { AlphasController } from './alphas.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [AlphasController],
  providers: [AlphasService],
})
export class AlphasModule {}
