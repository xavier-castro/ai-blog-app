import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
  <header className='mb-5'>
    <nav className="flex justify-between">
    <NavigationMenu>
    <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Home
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    </NavigationMenu>
    </nav>
  </header>
  )
}

export default Navbar
