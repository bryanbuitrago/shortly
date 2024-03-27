import Link from 'next/link';

const NavbarMobileMenu = ({ isMobileMenuOpen, onClickToggleMobileMenu }) => {
  const showOrHideMenu = isMobileMenuOpen ? 'flex' : 'hidden';

  return (
    <div
      id='menu'
      className={`${showOrHideMenu} absolute md:hidden p-6 rounded-lg bg-shortly-darkViolet left-6 right-6 top-20 z-100`}
    >
      <div
        className='flex flex-col items-center justify-center w-full 
                 space-y-6 font-bold text-white rounded-sm'
      >
        <Link
          className='w-full text-center'
          onClick={onClickToggleMobileMenu}
          href='#'
        >
          Features
        </Link>
        <Link
          className='w-full text-center'
          onClick={onClickToggleMobileMenu}
          href='#'
        >
          Pricing
        </Link>
        <Link
          className='w-full text-center'
          onClick={onClickToggleMobileMenu}
          href='#'
        >
          Resources
        </Link>
        <Link
          className='w-full pt-6 border-t border-gray-400 text-center'
          href='#'
        >
          Login
        </Link>
        <Link className='w-full py-3 text-center rounded-full bg-cyan' href='#'>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
