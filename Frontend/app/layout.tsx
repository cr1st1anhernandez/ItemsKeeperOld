import '@/styles/globals.css';
import clsx from 'clsx';
import { Metadata, Viewport } from 'next';

import { Providers } from './providers';

import { DockBar } from '@/components/Dock';
import { Navbar } from '@/components/navbar';
import { SideBar } from '@/components/SideBar';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          'min-h-[100dvh] w-full bg-background antialiased orange-light dark:orange-dark',
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex min-h-[100dvh] w-full flex-col">
            <Navbar />
            <div className="flex h-full w-full">
              <SideBar />
              <main className="h-full w-full px-6">{children}</main>
            </div>
            <DockBar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
