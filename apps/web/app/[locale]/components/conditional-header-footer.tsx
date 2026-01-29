'use client';

import { usePathname } from 'next/navigation';
import { Header } from './header';
import { Footer } from './footer';
import type { ReactNode } from 'react';

interface ConditionalHeaderFooterProps {
  children: ReactNode;
  dictionary: any;
}

export function ConditionalHeaderFooter({ children, dictionary }: ConditionalHeaderFooterProps) {
  const pathname = usePathname();
  const isAuthPage = pathname.includes('/sign-in') || pathname.includes('/sign-up');
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/it';
  const isExpertisePage = pathname.includes('/expertise');

  return (
    <>
      {!isAuthPage && !isHomePage && !isExpertisePage && <Header dictionary={dictionary} />}
      {children}
      {!isAuthPage && !isHomePage && !isExpertisePage && <Footer />}
    </>
  );
}
