'use client';
const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className='
        max-w-[2520px] 
        mx-auto 
        xl:px-32
        md:px-4
        sm:px-2
        px-4
      '
    >
      {children}
    </div>
  );
};

export default Container;
