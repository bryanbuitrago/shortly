import Link from 'next/link';
const NavbarRightBtns = () => {
  return (
    <div className='hidden items-center space-x-6 font-bold text-grayishViolet md:flex'>
      <div className='hover:text-shortly-veryDarkViolet'>Login</div>
      <Link
        className='px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70'
        href='#'
      >
        Sign Up
      </Link>
    </div>
  );
};

export default NavbarRightBtns;
