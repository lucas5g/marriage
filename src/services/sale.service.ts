import { prisma } from "@/libs/prisma";
import { CreateProductType, UpdateProductType } from "@/utils/types";
export class ProductService {
  create(data: CreateProductType) {
    return prisma.product.create({
      data
    })
  }

  findAll() {
    return prisma.product.findMany()
  }

  findOne(id: number) {
    return prisma.product.findFirstOrThrow({
      where: { id }
    })
  }

  update(id:number, data:UpdateProductType){
    return prisma.product.update({
      where:{id},
      data
    })
  }

  remove(id: number) {
    return prisma.product.delete({
      where: { id }
    })
  }

}