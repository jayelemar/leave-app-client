import Link from 'next/link'
import React, { FC } from 'react'
import { links } from './NavData'
import { buttonVariants } from '../ui/button'
import { NavProps } from '@/types/types';

const Nav:FC<NavProps> = ({ containerStyles }) => {


  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <Link 
          href={link.target} 
          key={index}
          className={`${buttonVariants({ variant: "ghost" })} cursor-pointer`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
export default Nav
