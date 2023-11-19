'use client';

import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';

const FixedChat = () => {
  return (
    <div className='bg-[#eba1a1] text-white rounded-full fixed bottom-[70px] right-3 z-10 px-4 py-2'>
      <div className='flex flex-row items-center gap-1'>
        <HiOutlineChatBubbleOvalLeftEllipsis size={20} className='stroke-2' />
        <span className='font-bold'>Chat</span>
      </div>
    </div>
  );
};

export default FixedChat;
