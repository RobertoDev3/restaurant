'use client'

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet'
import { Button } from '../../ui/button'
import { Logo } from '../../images/logo'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { NavBarLink } from './navbarLink'
import { ButtonNavBarReserve } from '@/components/common/buttons/Buttons'

export const NavBar = () => {
  return (
    <div className="flex justify-between items-end py-8 sm:py-14 relative z-50">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="hidden lg:flex gap-11 leading-7">
        <NavBarLink text="Menu" href="/" />
        <NavBarLink text="Events" href="/" />
        <NavBarLink text="Gallery" href="/" />
        <NavBarLink text="About" href="/" />
        <NavBarLink text="Contact" href="/" />
      </nav>
      <ButtonNavBarReserve className="hidden lg:flex relative top-4" />

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <Icon icon="tabler:menu-3" className="text-4xl" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col items-center gap-8">
              <NavBarLink text="Menu" href="/" />
              <NavBarLink text="Events" href="/" />
              <NavBarLink text="Gallery" href="/" />
              <NavBarLink text="About" href="/" />
              <NavBarLink text="Contact" href="/" />
              <ButtonNavBarReserve />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
