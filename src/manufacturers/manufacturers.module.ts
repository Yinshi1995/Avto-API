import { Module } from "@nestjs/common";
import { ManufacturersResolvers } from "./manufacturers.resolvers";
import { ManufacturersService } from "./manufacturers.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  providers: [ManufacturersResolvers, ManufacturersService],
  imports: [PrismaModule],
})
export class ManufacturersModule {}
