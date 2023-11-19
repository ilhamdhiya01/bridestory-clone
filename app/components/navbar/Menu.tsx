'use client';

import Container from '../Container';
import { LuClipboardList } from 'react-icons/lu';
import { SlHandbag } from 'react-icons/sl';
import { BsHeart, BsHouseDoor } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa6';
import MenuItem from './MenuItem';

const menuItemsMobile = [
  {
    label: 'Home',
    icon: BsHouseDoor,
    link: '/',
  },
  {
    label: 'Vendors',
    icon: LuClipboardList,
    link: '/vendors',
  },
  {
    label: 'Store',
    icon: SlHandbag,
    link: '/store',
  },
  {
    label: 'Inspiraions',
    icon: BsHeart,
    link: '/inspiraions',
  },
  {
    label: 'Profile',
    icon: FaRegUser,
    link: '/profile',
  },
];

const Menu = () => {
  return (
    <div className='fixed w-full z-10 bg-white bottom-0'>
      <div className='border-t py-2'>
        <Container>
          <div className='flex flex-row justify-between items-center gap-2'>
            {menuItemsMobile.map((item, index) => (
              <MenuItem key={index} label={item.label} link={item.link} icon={item.icon} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Menu;
