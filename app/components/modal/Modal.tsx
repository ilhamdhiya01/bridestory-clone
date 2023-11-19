'use client';
import { useState, useEffect } from 'react';
import { ModalProps } from '../..';

const Modal: React.FC<Partial<ModalProps>> = ({ onClose, isOpen, body, filter }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);
  return (
    <>
      <div
        onClick={onClose}
        className={`
          fixed
          w-full
          h-full
          flex
          justify-center
          items-center
          overflow-hidden
          inset-0
          z-50
          bg-neutral-800/70
          transition
          duration-300
          ease-in-out
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div
          className='
            relative
            w-full
            h-full
            md:w-4/5
            md:h-auto
            mx-auto
          '
        >
          {/* content */}
          <div
            className={`
            transition
            duration-300
            ease-in-out
            w-full
            h-full
            ${isOpen ? (filter ? 'translate-y-56' : 'translate-y-0') : filter ? 'translate-y-full' : '-translate-y-full'}
            ${isOpen ? 'opacity-100' : 'opacity-0'}
          `}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='
                relative
                bg-white
                flex
                flex-col
                w-full
                h-full
                shadow-lg
                overflow-y-auto
                no-scrollbar
                rounded-t-lg
              '
            >
              {body}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
