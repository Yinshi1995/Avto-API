import { Resolver, Query, Mutation, Args, Subscription } from "@nestjs/graphql";
import { ManufacturersService } from "./manufacturers.service";
import {
  Manufacturer,
  NewManufacturer,
  UpdateManufacturer,
} from "src/graphql.schema";
import { PubSub } from "graphql-subscriptions";

const pubSub = new PubSub();

@Resolver("Manufacturer")
export class ManufacturersResolvers {
  constructor(private readonly manufacturerService: ManufacturersService) {}

  @Query("manufacturers")
  async manufacturers(): Promise<Manufacturer[]> {
    return this.manufacturerService.findAll();
  }

  @Query("manufacturer")
  async manufacturer(@Args("id") args: string): Promise<Manufacturer> {
    return this.manufacturerService.findOne(args);
  }

  @Mutation('createManufacturer')
  async create(@Args('input') args: NewManufacturer): Promise<Manufacturer> {
    const createdManufacturer = await this.manufacturerService.create(args);
    pubSub.publish('manufacturerCreated', { manufacturerCreated: createdManufacturer });
    return createdManufacturer;
  }

  @Mutation("updateManufacturer")
  async update(@Args("input") args: UpdateManufacturer): Promise<Manufacturer> {
    return this.manufacturerService.update(args);
  }

  @Mutation("deleteManufacturer")
  async delete(@Args("id") args: string): Promise<Manufacturer> {
    return this.manufacturerService.delete(args);
  }

  @Subscription("manufacturerCreated")
  manufacturerCreated() {
    return pubSub.asyncIterator("manufacturerCreated");
  }
}
