import { Module } from '@nestjs/common';
import { PartsResolvers } from './parts.resolvers';
import { PartsService } from './parts.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [PartsResolvers, PartsService],
  imports: [PrismaModule],
})
export class PartsModule {}
