'use client';

import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import NavbarMobileMenu from './NavbarMobileMenu';
import NavbarLeftMenu from './NavbarLeftMenu';
import NavbarLogo from './NavbarLogo';
import NavbarRightBtns from './NavbarRightBtns';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onClickToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className='container relative mx-auto p-6'>
      {/* Container */}
      <div className='flex items-center justify-between'>
        {/* Logo/Menu Container */}
        <div className='flex items-center space-x-20'>
          <NavbarLogo />
          <NavbarLeftMenu />
        </div>
        {/* Right Buttons Menu */}
        <NavbarRightBtns />
        {/* Hamburger Button */}
        <HamburgerButton
          onClickToggleMobileMenu={onClickToggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
      {/* Mobile Menu */}
      <NavbarMobileMenu
        onClickToggleMobileMenu={onClickToggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
    </nav>
  );
};

export default NavBar;
