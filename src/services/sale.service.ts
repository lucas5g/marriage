import { prisma } from "@/libs/prisma";
import { CreateSaleType, UpdateSaleType } from "@/utils/types";
export class SaleService {
  create(data: CreateSaleType) {
    return prisma.sale.create({
      data
    })
  }

  findAll() {
    return prisma.sale.findMany()
  }

  findOne(id: number) {
    return prisma.sale.findFirstOrThrow({
      where: { id }
    })
  }

  update(id:number, data:UpdateSaleType){
    return prisma.sale.update({
      where:{id},
      data
    })
  }

  remove(id: number) {
    return prisma.sale.delete({
      where: { id }
    })
  }

}