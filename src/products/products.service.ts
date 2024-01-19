import { Injectable } from '@nestjs/common';
import { NewProduct, Product, UpdateProduct } from 'src/graphql.schema';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany({});
  }

  async create(input: NewProduct): Promise<Product> {
    return this.prisma.product.create({
      data: input,
    });
  }

  async update(params: UpdateProduct): Promise<Product> {
    const { id, ...paramsWithoutId } = params;

    return this.prisma.product.update({
      where: {
        id,
      },
      data: {
        ...paramsWithoutId,
      },
    });
  }

  async delete(id: number): Promise<Product> {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
