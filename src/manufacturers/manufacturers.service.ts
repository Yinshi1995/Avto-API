import { Injectable } from "@nestjs/common";
import { manufacturer as Manufacturer } from "@prisma/client";
import { NewManufacturer, UpdateManufacturer } from "src/graphql.schema";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ManufacturersService {
  constructor(private prisma: PrismaService) {}

  async findOne(name: string): Promise<Manufacturer | null> {
    return this.prisma.manufacturer.findUnique({
      where: {
        name,
      },
    });
  }

  async findAll(): Promise<Manufacturer[]> {
    return this.prisma.manufacturer.findMany({});
  }

  async create(input: NewManufacturer): Promise<Manufacturer> {
    return this.prisma.manufacturer.create({
      data: input,
    });
  }

  async update(params: UpdateManufacturer): Promise<Manufacturer> {
    const { name, ...paramsWithoutName } = params;

    return this.prisma.manufacturer.update({
      where: {
        name,
      },
      data: {
        ...paramsWithoutName,
      },
    });
  }

  async delete(name: string): Promise<Manufacturer> {
    return this.prisma.manufacturer.delete({
      where: {
        name,
      },
    });
  }
}
