import { NextUIProvider } from '@nextui-org/react';

const NextUiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUiProvider;
