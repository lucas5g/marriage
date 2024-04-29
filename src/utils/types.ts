import { Product, Sale } from "@prisma/client"

export type CreateProductType = Omit<Product, 'id'>
export type UpdateProductType = Partial<CreateProductType>

export type CreateSaleType = Omit<Sale, 'id' | 'createdAt' | 'updatedAt'> & Partial<Sale>
export type UpdateSaleType = Partial<CreateSaleType>