import type { Metadata } from 'next';
import { Roboto_Slab, Inconsolata } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';
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
  title: 'roy lee',
  description: 'portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto_slab.variable} ${inconsolata.variable}`}>
      <body className="bg-grey text-white">
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
