'use client';
import { MenuItemProps } from '../..';
import Link from 'next/link';

const MenuItem: React.FC<MenuItemProps> = ({ label, icon: Icon, link }) => {
  return (
    <Link href={link}>
      <div className='flex flex-col gap-1 items-center'>
        <Icon size={21} className='text-neutral-600' />
        <div className='text-xs text-neutral-500 font-semibold'>{label}</div>
      </div>
    </Link>
  );
};

export default MenuItem;
