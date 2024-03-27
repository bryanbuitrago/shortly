import Image from 'next/image';

const FeatureBox = ({ index, imgSrc, title, description }) => {
  const addMarginTopByIndex = (index) => {
    if (index === 0) return 'mt-0';
    else if (index === 1) return 'mt-24 md:mt-8';
    else if (index === 2) return 'mt-24 md:mt-16';
  };
  return (
    <div
      className={`relative flex flex-col p-6 space-y-6 
                bg-white rounded-lg md:w-1/3 
                  ${addMarginTopByIndex(index)}`}
    >
      {/* ===>> Image Possitioning <<=== */}
      <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
        {/* ===>> Image Container For Background & Center <<=== */}
        <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-shortly-veryDarkViolet'>
          <Image src={imgSrc} alt='icon' width={100} height={100} />
        </div>
      </div>

      <h5 className='pt-6 text-xl font-bold text-center capitalize md:text-left'>
        {title}
      </h5>
      <p className='text-center text-gray-400 md:text-left'>{description}</p>
    </div>
  );
};

export default FeatureBox;
