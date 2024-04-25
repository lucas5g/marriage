import { prisma } from "@/libs/prisma";
import { CreateProductType } from "@/utils/schemas";

export class ProductService {
  create(data: CreateProductType){
    return prisma.product.create({
      data
    })
  }

  remove(id:number){
    return prisma.product.delete({
      where:{id}
    })
  }

}