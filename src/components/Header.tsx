'use client'
import { usePathname } from 'next/navigation'
import { Card } from "@/components/Card";
import { menus } from '@/utils/menus';
import { titleToPathname } from '@/utils/title-to-pathname';

export function Header() {
  const pathname = usePathname()
  const title = menus.find(menu => {
    const test = titleToPathname(menu)

    console.log({test})
    return titleToPathname(menu).includes(pathname)
  })
  // const title = menus.find(menu => titleToPathname(menu).includes(pathname))
  console.log({ title, pathname, menus })
  return (
    <Card>
      <h1 className="text-2xl">{title}</h1>
    </Card>
  )
}