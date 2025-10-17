import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
// Removed import of WifiCursorEffect

export const Layout = () => {
  return (
    <div className="bg-white relative">
      {/* Removed WifiCursorEffect component */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};