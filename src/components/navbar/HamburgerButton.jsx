const HamburgerButton = ({ isMobileMenuOpen, onClickToggleMobileMenu }) => {
  const topBarAnimation = isMobileMenuOpen
    ? 'shortly-animate-hamburger-top'
    : '';
  const middleBarVisibility = isMobileMenuOpen
    ? 'shortly-hide-hamburger-middle'
    : '';
  const bottomBarAnimation = isMobileMenuOpen
    ? 'shortly-animate-hamburger-bottom'
    : '';
  return (
    <button
      type='button'
      id='menu-btn'
      className='block hamburger md:hidden focus:outline-none'
      onClick={onClickToggleMobileMenu}
    >
      <span className={`${topBarAnimation} hamburger-top`}></span>
      <span className={`${middleBarVisibility} hamburger-middle`}></span>
      <span className={`${bottomBarAnimation} hamburger-bottom`}></span>
    </button>
  );
};

export default HamburgerButton;
