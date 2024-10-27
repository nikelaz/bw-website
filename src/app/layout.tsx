import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { clsx } from 'clsx';
import "./globals.sass";

const inter = Inter({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Budget Warden",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode,
}>;

const RootLayout = (props: RootLayoutProps) => (
  <html lang="en">
    <body className={clsx(inter.className, 'bg-ash200')}>
      {props.children}
    </body>
  </html>
);

export default RootLayout;
