import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata = {
  title: 'Career Will | Master Your Future',
  description: 'Premium educational streaming platform powered by Raj.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#0a0a0a] text-zinc-100 min-h-screen`}
        suppressHydrationWarning
      >
        <NextTopLoader
          color="#10b981"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #10b981,0 0 5px #10b981"
        />
        <ClientLayout>
          {children}
        </ClientLayout>
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/yournumber"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50"
          aria-label="Contact on WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
          </svg>
        </a>
      </body>
    </html>
  );
}
