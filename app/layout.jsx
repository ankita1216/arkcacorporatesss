import './globals.css';
import { Inter, DM_Serif_Display } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif-display',
});

export const metadata = {
  title: 'ARKCA Corporate | Regulatory Compliance Consultancy',
  description: 'Strategic regulatory compliance, certification and advisory solutions for manufacturers, importers, producers and brand owners.',
  openGraph: {
    title: 'ARKCA Corporate | Regulatory Compliance Consultancy',
    description: 'Strategic regulatory compliance, certification and advisory solutions for manufacturers, importers, producers and brand owners.',
    url: 'https://arkcacorporate.com',
    siteName: 'ARKCA Corporate',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${dmSerif.variable} font-sans bg-offwhite text-black`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
