import { SaleService } from '@/services/sale.service'
import { describe, expect, it} from 'vitest'

const service = new SaleService()
describe('SaleService', () => {
  const properties = ['id', 'name', 'price', 'image']
  it.only('create and delete', async() => {
    const res = await service.create({
      emailOrName: 'lucassousa19@mail.com',
      totalPrice: 30,
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

    expect(Object.keys(res)).toEqual(properties)
  })

  it('update', async() => {
    const payload:UpdateProductType = {
      name: 'parafuso '.concat(new Date().toString())
    }
    const res = await service.update(1, payload)

    expect(res).toMatchObject(payload)
  })

})