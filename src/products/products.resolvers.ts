import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product, NewProduct, UpdateProduct } from 'src/graphql.schema';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Products')
export class ProductsResolvers {
  constructor(private readonly productService: ProductsService) {}

  @Query('products')
  async products(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Query('product')
  async product(@Args('id') args: number): Promise<Product> {
    return this.productService.findOne(args);
  }

  @Mutation('createProduct')
  async create(@Args('input') args: NewProduct): Promise<Product> {
    const createdProduct = await this.productService.create(args);
    pubSub.publish('productCreated', { productCreated: createdProduct });
    return createdProduct;
  }

  @Mutation('updateProduct')
  async update(@Args('input') args: UpdateProduct): Promise<Product> {
    return this.productService.update(args);
  }

  @Mutation('deleteProduct')
  async delete(@Args('id') args: number): Promise<Product> {
    return this.productService.delete(args);
  }

  @Subscription('productCreated')
  productCreated() {
    return pubSub.asyncIterator('productCreated');
  }
}
