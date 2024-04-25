import { prisma } from "@/libs/prisma";



function main(){
  prisma.product.upsert({
    where: {
      id: 1
    },
    create:{
      image: 'https://72380.cdn.simplo7.net/static/72380/sku/eletricas-furadeiras-manuais-e-base-magnetica-furadeira-parafusadeira-impacto-1-2-20v-dcd7781-b-dewalt-1684956458288.jpg',
      name: 'furadeira',
      price: 599.9,
      id: 1
    },
    update:{}
  }).then(() => console.log('Product created successfully'))
}


main()