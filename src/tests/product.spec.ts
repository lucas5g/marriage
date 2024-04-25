import { ProductService } from '@/services/product.service'
import { describe, expect, it} from 'vitest'

const service = new ProductService()
describe('ProductService', () => {
  it('create and delete', async() => {
    const res = await service.create({
      image: 'https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg',
      name: 'Um ano netflix',
      price: 200
    })

    expect(res).toHaveProperty('id')
    await service.remove(res.id)
  })

  it.only('find all', async() => {
    const res = await service.findAll()

    console.log(res)
  })

})