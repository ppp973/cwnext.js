'use client';

import { useEffect } from 'react';

export default function SecurityProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable right click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
      }
      // Ctrl+S (Save)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
      }
    };

    // DevTools detection and prevention
    const detectDevTools = () => {
      const threshold = 160;
      const widthDiff = window.outerWidth - window.innerWidth > threshold;
      const heightDiff = window.outerHeight - window.innerHeight > threshold;

      if (widthDiff || heightDiff) {
        // Redirect to about:blank within 1 second as requested
        setTimeout(() => {
          window.location.href = 'about:blank';
        }, 100);
      }
    };

    // Debugger loop to slow down inspection
    const preventInspection = () => {
      setInterval(() => {
        (function() {
          return false;
        }['constructor']('debugger')());
      }, 100);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    const interval = setInterval(detectDevTools, 1000);
    preventInspection(); // Increased security as requested

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  return <>{children}</>;
}
