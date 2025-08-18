'use client'

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

// Pages without header/footer
const noLayoutPages = ['/lehrer-finden', '/dankesseite'];

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showLayout = !noLayoutPages.includes(pathname);

  if (!showLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}