import { menus } from "@/utils/menus"
import Link from "next/link"

export function Navbar() {
  return (
    <ul className="bg-lime-800 text-white flex gap-5 p-5">
      {menus.map(menu => {
        const link =  menu.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()

        return (

          <li key={menu}>
            <Link href={link}>
              {menu}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}