'use client';

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/SplashScreen';
import SecurityProvider from '@/components/SecurityProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppPopup from '@/components/WhatsAppPopup';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  // Check if splash has been seen in this session
  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setShowSplash(false); // eslint-disable-line react-hooks/set-state-in-effect
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('hasSeenSplash', 'true');
  };

  return (
    <SecurityProvider>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={showSplash ? 'hidden' : 'flex flex-col min-h-screen'}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {!showSplash && <WhatsAppPopup />}
      </div>
    </SecurityProvider>
  );
}
