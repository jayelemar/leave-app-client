import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

const Logo = () => {
  return (
    <Link 
      href='/'
      className={`${buttonVariants({ variant: "ghost" })} cursor-pointer`}
    >
      Logo
    </Link>
  )
}

export default Logo