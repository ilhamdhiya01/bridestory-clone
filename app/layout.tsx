import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Menu from './components/navbar/Menu';
import VendorRecomendationModal from './components/modal/VendorRecomendationModal';
import FilterVendorModal from './components/modal/FilterVendorModal';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Bridestory',
    template: '%s',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${figtree.className} w-full min-h-screen box-border`}>
        <>
          <VendorRecomendationModal />
          <FilterVendorModal />
          <Navbar />
          <Menu />
        </>
        {children}
      </body>
    </html>
  );
}
