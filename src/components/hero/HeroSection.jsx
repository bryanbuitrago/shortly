import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const HeroSection = () => {
  return (
    <section id='hero'>
      {/* Container */}
      <div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row'>
        {/* Left Side Content Container */}
        <div className='flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 lg:text-left'>
          <HeroContent />
        </div>
        {/* Right Side Image Container */}
        <div className='mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2'>
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
