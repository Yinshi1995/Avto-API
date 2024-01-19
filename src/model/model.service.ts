import { Injectable } from '@nestjs/common';
import { model as Model } from '@prisma/client';
import { ModelCreateInput, ModelUpdateInput } from 'src/graphql.schema';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ModelService {
  constructor(private prisma: PrismaService) {}

  async findOne(name: string): Promise<Model | null> {
    return this.prisma.model.findUnique({
      where: {
        name,
      },
    });
  }

  async findAll(): Promise<Model[]> {
    return this.prisma.model.findMany({});
  }

  async create(params: ModelCreateInput): Promise<Model> {
    const { manufacturer, ...paramsWithounManufacturer } = params;
    return this.prisma.model.create({
      data: { 
        ...paramsWithounManufacturer,
        manufacturer: {
          connect: { name: manufacturer }
        },
      },
    });
  }

  async update(params: ModelUpdateInput): Promise<Model> {
    const { name, manufacturer, ...paramsWithoutName } = params;
    return this.prisma.model.update({
      where: {
        name,
      },
      data: { 
        ...paramsWithoutName,
        manufacturer: {
          connect: { name: manufacturer }
        }
      },
    });
  }

  async delete(name: string): Promise<Model> {
    return this.prisma.model.delete({
      where: {
        name,
      },
    });
  }
}
