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

  return (
    <>
      {!isAuthPage && <Header dictionary={dictionary} />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}
