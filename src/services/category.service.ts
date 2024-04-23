import { CreateCategoryType, UpdateCategoryType } from "@/utils/schemas"

export class CategoryService {

  create(data: CreateCategoryType) {
    return data
  }

  findAll() {
    return []
  }

  findOne() {
    return {}
  }

  update(id: number, data: UpdateCategoryType) {
    return { id, data }
  }
}