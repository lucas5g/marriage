import { ProductService } from '@/services/product.service'
import { UpdateProductType } from '@/utils/types'
import { describe, expect, it} from 'vitest'

const service = new ProductService()
describe('ProductService', () => {
  const properties = ['id', 'name', 'price', 'image']
  it('create and delete', async() => {
    const res = await service.create({
      image: 'https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg',
      name: 'Um ano netflix',
      price: 200
    })

    expect(res).toHaveProperty('id')
    await service.remove(res.id)
  })

  it('find all', async() => {
    const res = await service.findAll()

    res.forEach(row => {
      expect(Object.keys(row)).toEqual(properties)
    })
  })


  it('find one ', async() => {
    const res = await service.findOne(1)

    console.log(Object.keys(res))

    expect(Object.keys(res)).toEqual(properties)
  })

  it('upload', async() => {
    const payload:UpdateProductType = {
      name: 'parafuso '.concat(new Date().toString())
    }
    const res = await service.update(1, payload)

    expect(res).toMatchObject(payload)
  })

})