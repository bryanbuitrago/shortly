import Link from 'next/link';
import { COLUMN_DATA } from './footerData';

const FooterMenuColumns = () => {
  // ===<< Render the list of menuItems >>===
  const renderMenuItems = (menuItems) => {
    return (
      <div className='flex flex-col items-center space-y-3 md:items-start'>
        {menuItems.map((item, itemIndex) => (
          <Link
            key={itemIndex}
            href='#'
            className='capitalize text-grayishViolet hover:text-cyan'
          >
            {item}
          </Link>
        ))}
      </div>
    );
  };

  // ===<< Render the list of titles and menuItems >>===
  const renderTitlesAndMenuItems = () => {
    return COLUMN_DATA.map(({ title, menuItems }, index) => (
      <div
        key={index}
        className='flex flex-col items-center w-full md:items-start'
      >
        <div className='mb-5 font-bold text-white capitalize'>{title}</div>
        {/* ===<< For each title, call the renderMenuItems Function
                  To render the list of menuItems >>=== */}
        {renderMenuItems(menuItems)}
      </div>
    ));
  };

  return (
    <div className='flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0'>
      {/* ===<< Call the renderTitlesAndMenuItems Function >>=== */}
      {renderTitlesAndMenuItems()}
    </div>
  );
};

export default FooterMenuColumns;
