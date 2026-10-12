import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'HydroSync Innovations LLP — Innovation for a Healthier Tomorrow',
  description: 'Premier IoT, Embedded Systems, Artificial Intelligence training, research prototyping, college workshops, and industrial engineering solutions.',
  keywords: [
    'HydroSync Innovations LLP',
    'IoT Training',
    'Embedded Systems Course',
    'Edge AI',
    'TinyML',
    'ESP32',
    'Arduino',
    'Robotics Workshops',
    'College Technical Training',
    'Hardware Prototyping',
    'Internships',
  ],
  authors: [{ name: 'HydroSync Innovations LLP' }],
  metadataBase: new URL('https://hydrosync.in'),
  openGraph: {
    title: 'HydroSync Innovations LLP — IoT, Embedded & AI Engineering',
    description: 'Empowering engineers and institutions with cutting-edge hands-on hardware training and IoT solutions.',
    siteName: 'HydroSync Innovations LLP',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#20A7D7] selection:text-white">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
