import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ModelResolvers } from './model.resolvers';
import { ModelService } from './model.service';

@Module({
  providers: [ModelResolvers, ModelService],
  imports: [PrismaModule],
})
export class ModelModule {}
