import { Product } from "@prisma/client";
import { z } from "zod";

/**
 * Product
 */
export const createProductSchema = z.object({
  name: z.string(),
  price: z.number(),
  image: z.string(),
})

export const updateProductSchema = createProductSchema.partial()



/**
 * Category
 */
export const createCategorySchema = z.object({
  name: z.string()
})
export const updateCategorySchema = createCategorySchema.partial()

export type CreateCategoryType = z.infer<typeof createCategorySchema>
export type UpdateCategoryType = z.infer<typeof updateCategorySchema>

/**
 * Sale 
 */
export const createSaleSchema = z.object({
  emailOrName: z.string(),
  products: z.array(z.number())
})