import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProgressBar } from './ScrollProgressBar';
import { WhatsAppButton } from './WhatsAppButton';
import { WifiCursorEffect } from '@/components/effects/WifiCursorEffect';

export const Layout = () => {
  return (
    <div className="bg-white relative">
      <WifiCursorEffect />
      <ScrollProgressBar />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};