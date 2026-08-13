import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingMobileCTA from '../components/FloatingMobileCTA';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Negi Taxi Service | Fast & Reliable Cabs',
  description: 'Book local and outstation taxi rides with verified drivers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen antialiased flex flex-col`}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <FloatingMobileCTA />
      </body>
    </html>
  );
}