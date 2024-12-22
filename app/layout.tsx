import type { Metadata, Viewport } from 'next';
import {
  Inter as FontSans,
  La_Belle_Aurore as FontHandwriting,
} from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import SVGGradientBg from '@/components/Hero/SVGGradientBg';
import Menu from '@/components/Hero/Menu/Menu';

export const metadata: Metadata = {
  title: 'Webclues',
  description: 'Practical Task',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHandwriting = FontHandwriting({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-handwriting',
});

const Sora = localFont({
  src: '../public/fonts/sora/Sora-Regular.ttf',
  variable: '--font-sora',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-bg-default font-sans antialiased',
          fontSans.variable,
          fontHandwriting.variable,
          Sora.variable,
        )}
      >
        <div className="bg-[url('/images/png/planet-bg.png'),_url('/images/png/banner_cirlce.png')] bg-cover bg-no-repeat md:bg-contain">
          <div className="mx-auto max-w-[1440px]">
            <SVGGradientBg />
            <Menu />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
