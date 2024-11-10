import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Sidebar from '@/components/sidebar';
import { siteConfig } from '@/constants/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://fedor-chervinskii.github.io'),
  title: `${siteConfig.name} - ${siteConfig.title}`,
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  keywords: ['Robotics', 'Computer Vision', 'Deep Learning', 'SLAM', 'Engineer'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fedor-chervinskii.github.io',
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: '/images/profile/avatar.jpeg',
        width: 800,
        height: 800,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.description,
    images: ['/images/profile/avatar.jpeg'],
    creator: '@chervinskii',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 md:ml-64 px-8 py-6 bg-background">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}