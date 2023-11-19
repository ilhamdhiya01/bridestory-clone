'use client';

import { ButtonProps } from '..';

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, icon: Icon, outline, small }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:bg-[#d9d8d8]
        disabled:border-[#d9d8d8]
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline ? 'bg-white' : 'bg-[#eba1a1]'}
        ${outline ? 'border-[#eba1a1]' : 'border-[#eba1a1]'}
        ${outline ? 'text-[#eba1a1]' : 'text-white'}
        ${small ? 'py-1' : 'py-[6px]'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border' : 'border-2'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className='
        absolute
        left-4
        top-3
      '
        />
      )}
      {label}
    </button>
  );
};

export default Button;
