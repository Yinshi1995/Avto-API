import { Module } from '@nestjs/common';
import { ProductsResolvers } from './products.resolvers';
import { ProductsService } from './products.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [ProductsResolvers, ProductsService],
  imports: [PrismaModule],
})
export class ProductsModule {}
