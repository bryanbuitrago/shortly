import Image from 'next/image';
import Link from 'next/link';
import FooterMenuColumns from './FooterMenuColumns';

const Footer = () => {
  return (
    <footer className='py-16 bg-shortly-veryDarkViolet'>
      <div
        className='container flex flex-col items-center justify-between mx-auto
                   space-y-16 md:flex-row md:space-y-0 md:items-start'
      >
        {/* ===>> Logo <<=== */}
        <Image src='/images/logo.svg' alt='logo' width={100} height={100} />
        {/* ===>> Menus Container <<=== */}
        <div className='flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0'>
          <FooterMenuColumns />
        </div>

        {/* ===>> Social Media Container <<=== */}
        <div className='flex space-x-6'>
          <Link href='#'>
            <Image
              src='/images/icon-facebook.svg'
              alt='facebook'
              width={30}
              height={30}
              className='shortly-ficon'
            />
          </Link>
          <Link href='#'>
            <Image
              src='/images/icon-twitter.svg'
              alt='twitter'
              width={30}
              height={30}
              className='shortly-ficon'
            />
          </Link>
          <Link href='#'>
            <Image
              src='/images/icon-pinterest.svg'
              alt='pinterest'
              width={30}
              height={30}
              className='shortly-ficon'
            />
          </Link>
          <Link href='#'>
            <Image
              src='/images/icon-instagram.svg'
              alt='instagram'
              width={30}
              height={30}
              className='shortly-ficon'
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
