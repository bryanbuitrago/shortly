import ShortenForm from './ShortenForm';
import ShortenLink from './ShortenLink';
import { URLS_DATA } from './shortenData';

const ShortenSection = () => {
  return (
    <section id='shorten' className='relative bg-gray-100'>
      {/*  Container  */}
      <div className='max-w-4xl mx-auto space-y-6'>
        <ShortenForm />

        {/*  Links */}
        {URLS_DATA.map(({ standardUrl, shortenUrl }, index) => (
          <ShortenLink
            key={index}
            index={index}
            standardUrl={standardUrl}
            shortenUrl={shortenUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ShortenSection;
