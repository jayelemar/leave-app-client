'use client';
import React from 'react'
import Nav from '../nav/Nav';
import Logo from './Logo';
import MobileNav from '../nav/MobileNav';
import LoginButton from './LoginButton';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between">
        <Logo />
        <Nav containerStyles='hidden sm:flex flex-row gap-x-2' />
        <div className="flex flex-row gap-x-2">
          <LoginButton />
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}
export default Header