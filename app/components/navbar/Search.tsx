'use client';
import { BsSearch } from 'react-icons/bs';
import { BsBagHeart, BsChatSquareDots, BsBell } from 'react-icons/bs';
import { useState, useCallback } from 'react';
import Link from 'next/link';

const RightListMenu = () => (
  <div className='flex flex-ro items-center gap-5 text-neutral-600'>
    <Link href={'/'}>
      <BsBagHeart size={17} />
    </Link>
    <Link href={'/'}>
      <BsBell size={17} />
    </Link>
    <Link href={'/'}>
      <BsChatSquareDots size={17} />
    </Link>
  </div>
);

const Search = () => {
  const [searchActive, setSearchActive] = useState(false);
  const handleSearchActive = useCallback(() => {
    setSearchActive(true);
  }, [setSearchActive]);

  const handleSearchUnactive = useCallback(() => {
    setSearchActive(false);
  }, [setSearchActive]);
  return (
    <div className='flex justify-center items-center gap-5 w-full relative'>
      <BsSearch className='shrink-0' size={18} />
      <input type='text' onFocus={handleSearchActive} className='outline-none border-none w-full p-1 placeholder:text-base placeholder:text-neutral-400 text-sm' placeholder='Search' />
      <span onClick={handleSearchUnactive} className={`text-sm right-6 absolute transition-all duration-500 ease-in-out ${searchActive ? 'translate-x-0' : '-translate-x-full'} ${searchActive ? 'opacity-100' : 'opacity-0'}`}>
        Batal
      </span>
      <div className={`absolute right-0 transition-all duration-500 ease-in-out ${!searchActive ? 'translate-x-0' : 'translate-x-full'} ${!searchActive ? 'opacity-100' : 'opacity-0'}`}>
        <RightListMenu />
      </div>
    </div>
  );
};

export default Search;
