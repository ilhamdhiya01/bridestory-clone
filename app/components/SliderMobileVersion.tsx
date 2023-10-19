'use client';

const SliderMobileVersion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='overflow-x-hidden'>
      <div className='w-full gap-2 flex flex-row items-center overflow-x-auto no-scrollbar'>{children}</div>
    </div>
  );
};

export default SliderMobileVersion;
