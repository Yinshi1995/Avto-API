import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { Part_catalogue } from 'src/graphql.schema';
import { PartCataloguesService } from './part-catalogue.service';

@Resolver('PartCatalogue')
export class PartCatalogueResolvers {
  constructor(private readonly partCatalogueService: PartCataloguesService) {}

  @Query('partCatalogues')
  async partCatalogues(): Promise<Part_catalogue[]> {
    return this.partCatalogueService.findAll();
  }

  @Query('partCatalogue')
  async partCatalogue(@Args('name') name: string): Promise<Part_catalogue> {
    return this.partCatalogueService.findOne(name);
  }

  @Mutation('createPartCatalogue')
  async createPartCatalogue(@Args('input') input: { name: string }): Promise<Part_catalogue> {
    return this.partCatalogueService.create(input);
  }

  @Mutation('updatePartCatalogue')
  async updatePartCatalogue(@Args('input') input: { name: string }): Promise<Part_catalogue> {
    return this.partCatalogueService.update(input);
  }

  @Mutation('deletePartCatalogue')
  async deletePartCatalogue(@Args('name') name: string): Promise<Part_catalogue> {
    return this.partCatalogueService.delete(name);
  }

  @Subscription('partCatalogueCreated')
  partCatalogueCreated() {
    // Add subscription logic here if needed
  }
}
