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
      </body>
    </html>
  );
}
