import PropTypes from 'prop-types';

import Image from 'next/image';

function Header({ title }) {
  title = [].concat(title);
  title = title[title.length - 1];

  return (
    <header className="max-w-7xl relative mx-auto sm:px-6 lg:px-8 sm:flex sm:items-center sm:py-1">
      <div className="w-full sm:w-32 md:w-32 lg:w-40 h-40 sm:h-24 relative">
        <Image className="rounded-lg" src="/little-baby-hedgehog.png" alt="Little Baby Hedgehog" layout="fill" objectFit="cover" />
      </div>
      <h1 className="absolute sm:static right-2 bottom-2 sm:ml-2  text-center text-white sm:text-gray-900 text-3xl font-bold leading-tight ">
        {title}
      </h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

export default Header;
