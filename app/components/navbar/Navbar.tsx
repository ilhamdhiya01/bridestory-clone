'use client';

import Container from '../Container';
import Search from './Search';

const Navbar = () => {
  return (
    <nav className='fixed w-full top-0 z-10 bg-white'>
      <div className='border-b py-3'>
        <Container>
          <div className='flex items-center justify-between'>
            <Search />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
