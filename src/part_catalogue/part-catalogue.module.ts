import { Module } from '@nestjs/common';
import { PartCatalogueResolvers } from './part-catalogue.resolvers';
import { PartCataloguesService } from './part-catalogue.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PartCatalogueResolvers, PartCataloguesService],
  imports: [PrismaModule]
})
export class PartCatalogueModule {}
