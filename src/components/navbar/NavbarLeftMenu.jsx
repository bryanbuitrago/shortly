import Link from 'next/link';

const NavbarLeftMenu = () => {
  return (
    <div className='hidden space-x-8 font-bold md:flex'>
      <Link
        className='text-grayishViolet hover:text-shortly-veryDarkViolet'
        href='#'
      >
        Features
      </Link>
      <Link
        className='text-grayishViolet hover:text-shortly-veryDarkViolet'
        href='#'
      >
        Pricing
      </Link>
      <Link
        className='text-grayishViolet hover:text-shortly-veryDarkViolet'
        href='#'
      >
        Resources
      </Link>
    </div>
  );
};

export default NavbarLeftMenu;
