
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewManufacturer {
    name: string;
    page_link: string;
    logo_link: string;
}

export class UpdateManufacturer {
    name: string;
    page_link?: Nullable<string>;
    logo_link?: Nullable<string>;
}

export class ModelCreateInput {
    name: string;
    img_link?: Nullable<string>;
    page_link: string;
    year_start: number;
    year_end: number;
    manufacturer?: Nullable<string>;
}

export class ModelUpdateInput {
    name?: Nullable<string>;
    img_link?: Nullable<string>;
    page_link?: Nullable<string>;
    year_start?: Nullable<number>;
    year_end?: Nullable<number>;
    manufacturer?: Nullable<string>;
}

export class NewPartCatalogue {
    name: string;
}

export class UpdatePartCatalogue {
    name: string;
}

export class NewPart {
    name: string;
    model_name: string;
    page_link: string;
    catalogue_name: string;
}

export class UpdatePart {
    id: number;
    name?: Nullable<string>;
    model_name?: Nullable<string>;
    page_link?: Nullable<string>;
    catalogue_name?: Nullable<string>;
}

export class NewProduct {
    code: string;
    price: Decimal;
    part_id: number;
    manufacturer_name: string;
    description: string;
    city: string;
}

export class UpdateProduct {
    id: number;
    code?: Nullable<string>;
    price?: Nullable<Decimal>;
    part_id?: Nullable<number>;
    manufacturer_name?: Nullable<string>;
    description?: Nullable<string>;
    city?: Nullable<string>;
}

export class Manufacturer {
    name: string;
    page_link?: Nullable<string>;
    logo_link?: Nullable<string>;
}

export abstract class IQuery {
    abstract manufacturers(): Manufacturer[] | Promise<Manufacturer[]>;

    abstract manufacturer(id: string): Nullable<Manufacturer> | Promise<Nullable<Manufacturer>>;

    abstract models(): Model[] | Promise<Model[]>;

    abstract model(name: string): Nullable<Model> | Promise<Nullable<Model>>;

    abstract part_catalogues(): Part_catalogue[] | Promise<Part_catalogue[]>;

    abstract part_catalogue(name: string): Nullable<Part_catalogue> | Promise<Nullable<Part_catalogue>>;

    abstract parts(): Part[] | Promise<Part[]>;

    abstract part(id: number): Nullable<Part> | Promise<Nullable<Part>>;

    abstract partsByCatalogue(partCatalogueName: string): Part[] | Promise<Part[]>;

    abstract products(): Product[] | Promise<Product[]>;

    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class IMutation {
    abstract createManufacturer(input: NewManufacturer): Manufacturer | Promise<Manufacturer>;

    abstract updateManufacturer(input: UpdateManufacturer): Nullable<Manufacturer> | Promise<Nullable<Manufacturer>>;

    abstract deleteManufacturer(name: string): Nullable<Manufacturer> | Promise<Nullable<Manufacturer>>;

    abstract createModel(input: ModelCreateInput): Model | Promise<Model>;

    abstract updateModel(input: ModelUpdateInput): Nullable<Model> | Promise<Nullable<Model>>;

    abstract deleteModel(name: string): Nullable<Model> | Promise<Nullable<Model>>;

    abstract createPartCatalogue(input: NewPartCatalogue): Part_catalogue | Promise<Part_catalogue>;

    abstract updatePartCatalogue(input: UpdatePartCatalogue): Nullable<Part_catalogue> | Promise<Nullable<Part_catalogue>>;

    abstract deletePartCatalogue(name: string): Nullable<Part_catalogue> | Promise<Nullable<Part_catalogue>>;

    abstract createPart(input: NewPart): Part | Promise<Part>;

    abstract updatePart(input: UpdatePart): Nullable<Part> | Promise<Nullable<Part>>;

    abstract deletePart(id: number): Nullable<Part> | Promise<Nullable<Part>>;

    abstract createProduct(input: NewProduct): Product | Promise<Product>;

    abstract updateProduct(input: UpdateProduct): Nullable<Product> | Promise<Nullable<Product>>;

    abstract deleteProduct(id: number): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class ISubscription {
    abstract manufacturerCreated(): Nullable<Manufacturer> | Promise<Nullable<Manufacturer>>;

    abstract partCatalogueCreated(): Nullable<Part_catalogue> | Promise<Nullable<Part_catalogue>>;

    abstract partCreated(): Nullable<Part> | Promise<Nullable<Part>>;

    abstract productCreated(): Nullable<Product> | Promise<Nullable<Product>>;
}

export class Model {
    name: string;
    img_link?: Nullable<string>;
    page_link?: Nullable<string>;
    year_start?: Nullable<number>;
    year_end?: Nullable<number>;
    manufacturer?: Nullable<string>;
}

export class Part_catalogue {
    name: string;
    part?: Nullable<Part>;
    parts?: Nullable<Part[]>;
}

export class Part {
    id: number;
    name: string;
    model_name: string;
    page_link: string;
    catalogue_name: string;
}

export class Product {
    id: number;
    code: string;
    price: Decimal;
    part_id: number;
    manufacturer_name?: Nullable<string>;
    description: string;
    city: string;
}

export type Decimal = any;
type Nullable<T> = T | null;
