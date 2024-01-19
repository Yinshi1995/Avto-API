import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ModelService } from './model.service';
import { model as Model } from '@prisma/client';
import { ModelCreateInput, ModelUpdateInput } from 'src/graphql.schema';

@Resolver('Model')
export class ModelResolvers {
  constructor(private readonly modelService: ModelService) {}

  @Query('models')
  async models(): Promise<Model[]> {
    return this.modelService.findAll();
  }

  @Query('model')
  async model(@Args('name') name: string): Promise<Model> {
    return this.modelService.findOne(name);
  }

  @Mutation('createModel')
  async createModel(@Args('data') data: ModelCreateInput): Promise<Model> {
    return this.modelService.create(data);
  }

  @Mutation('updateModel')
  async updateModel(@Args('params') params: ModelUpdateInput): Promise<Model> {
    return this.modelService.update(params);
  }

  @Mutation('deleteModel')
  async deleteModel(@Args('name') name: string): Promise<Model> {
    return this.modelService.delete(name);
  }
}
