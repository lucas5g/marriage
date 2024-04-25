'use client'
import { usePathname } from 'next/navigation'
import { Card } from "@/components/Card";

export function Header(){
  const pathname = usePathname()

  console.log({pathname})
  return(
    <Card>
      <h1 className="text-2xl">Meu header</h1>
    </Card>
  )
}