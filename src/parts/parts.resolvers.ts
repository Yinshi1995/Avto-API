import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PartsService } from './parts.service';
import { Part, NewPart, UpdatePart } from 'src/graphql.schema';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Part')
export class PartsResolvers {
  constructor(private readonly partService: PartsService) {}

  @Query('parts')
  async parts(): Promise<Part[]> {
    return this.partService.findAll();
  }

  @Query('part')
  async part(@Args('id') args: number): Promise<Part> {
    console.log(args)
    return this.partService.findOne(args);
  }
  
  @Query('partsByCatalogue')
  async partsByCatalogue(@Args('partCatalogueName') partCatalogueName: string): Promise<Part[]> {
    return this.partService.findManyByCatalogue(partCatalogueName);
  }

  @Mutation('createPart')
  async create(@Args('input') args: NewPart): Promise<Part> {
    const createdPart = await this.partService.create(args);
    pubSub.publish('partCreated', { partCreated: createdPart });
    return createdPart;
  }

  @Mutation('updatePart')
  async update(@Args('input') args: UpdatePart): Promise<Part> {
    return this.partService.update(args);
  }

  @Mutation('deletePart')
  async delete(@Args('id') args: number): Promise<Part> {
    return this.partService.delete(args);
  }
  
  @Subscription('partCreated')
  partCreated() {
    return pubSub.asyncIterator('partCreated');
  }
}
