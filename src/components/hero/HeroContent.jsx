import Link from 'next/link';

const HeroContent = () => {
  return (
    <>
      <h1 className='text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left'>
        More than just shorter links
      </h1>
      <p className='text-2xl text-center text-gray-400 lg:max-w-md lg:text-left'>
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <div className='mx-auto lg:mx-0'>
        <Link
          className='py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full 
                         lg:py-4 hover:opacity-70'
          href='#'
        >
          Get Started
        </Link>
      </div>
    </>
  );
};

export default HeroContent;
