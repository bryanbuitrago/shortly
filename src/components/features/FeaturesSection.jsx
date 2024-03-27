import FeatureBox from './FeatureBox';
import { BOXES_DATA } from './featuresData';

const FeaturesSection = () => {
  return (
    <section id='features' className='pb-32 bg-gray-100'>
      <div className='container mx-auto relative flex flex-col items-start px-6 md:flex-row md:space-x-7'>
        {/*  Horizontal Line  */}
        <div className='hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block'></div>
        {/*  Vertical Line */}
        <div className='absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden'></div>
        {/*  Boxes  */}
        {BOXES_DATA.map(({ imgSrc, title, description }, index) => (
          <FeatureBox
            key={index}
            index={index}
            imgSrc={imgSrc}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
