import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ConfigModule } from "@nestjs/config";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ManufacturersModule } from "./manufacturers/manufacturers.module";
import { ModelModule } from './model/model.module';
import { PartsModule } from './parts/parts.module';
import { ProductsModule } from './products/products.module';
import { PartCatalogueModule } from './part_catalogue/part-catalogue.module';

@Module({
  imports: [
    ManufacturersModule,
    ModelModule,
    PartsModule,
    ProductsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/*.gql"],
      installSubscriptionHandlers: true,
    }),
    PartCatalogueModule,
  ],
})
export class AppModule {}
