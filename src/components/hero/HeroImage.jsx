import Image from 'next/image';

const HeroImage = () => {
  return (
    <Image
      src='/images/illustration-working.svg'
      alt='illustration'
      width={700}
      height={700}
    />
  );
};

export default HeroImage;
