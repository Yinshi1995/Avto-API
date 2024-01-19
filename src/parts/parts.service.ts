import { Injectable } from '@nestjs/common';
import { part as Part } from '@prisma/client';
import { NewPart, UpdatePart } from 'src/graphql.schema';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PartsService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<Part | null> {
    return this.prisma.part.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<Part[]> {
    return this.prisma.part.findMany({});
  }

  async findManyByCatalogue(partCatalogueName: string): Promise<Part[]> {
    return this.prisma.part.findMany({
      where: {
        catalogue_name: partCatalogueName,
      },
    });
  }

  async create(input: NewPart): Promise<Part> {
    return this.prisma.part.create({
      data: input,
    });
  }

  async update(params: UpdatePart): Promise<Part> {
    const { id, ...paramsWithoutId } = params;

    return this.prisma.part.update({
      where: {
        id,
      },
      data: {
        ...paramsWithoutId,
      },
    });
  }

  async delete(id: number): Promise<Part> {
    return this.prisma.part.delete({
      where: {
        id,
      },
    });
  }
}
