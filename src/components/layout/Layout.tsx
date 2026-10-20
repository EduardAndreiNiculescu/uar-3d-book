import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <a href="#continut" className="visually-hidden">
        Sari la conținut
      </a>
      <Header />
      <main id="continut">{children}</main>
      <Footer />
    </>
  );
}
