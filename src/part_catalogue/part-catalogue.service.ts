import { Injectable } from '@nestjs/common';
import { part_catalogue as PartCatalogue } from '@prisma/client';
import { NewPartCatalogue, UpdatePartCatalogue } from 'src/graphql.schema';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PartCataloguesService {
  constructor(private prisma: PrismaService) {}

  async findOne(name: string): Promise<PartCatalogue | null> {
    return this.prisma.part_catalogue.findUnique({
      where: {
        name,
      },
    });
  }

  async findAll(): Promise<PartCatalogue[]> {
    return this.prisma.part_catalogue.findMany({});
  }

  async create(input: NewPartCatalogue): Promise<PartCatalogue> {
    return this.prisma.part_catalogue.create({
      data: input,
    });
  }

  async update(params: UpdatePartCatalogue): Promise<PartCatalogue> {
    const { name, ...paramsWithoutName } = params;

    return this.prisma.part_catalogue.update({
      where: {
        name,
      },
      data: {
        ...paramsWithoutName,
      },
    });
  }

  async delete(name: string): Promise<PartCatalogue> {
    return this.prisma.part_catalogue.delete({
      where: {
        name,
      },
    });
  }
}
