export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}

export type OrderPayload = {
    products: ProductId[];
} & OrderLocationData;                   /* MERGE DE ATRIBUTOS: Artificio do Typescript pra copiar os atributos de outro type pra não ficar redundante */

type ProductId = {
    id: number;
}

/* lembre de usar o ctrl + d para multi cursor */