import type { Metadata } from 'next';
import { Roboto_Slab, Inconsolata } from 'next/font/google';
import Header from './components/header';
import './globals.css';

const roboto_slab = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inconsolata',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto_slab.variable} ${inconsolata.variable}`}>
      <body className="bg-black text-white">
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}