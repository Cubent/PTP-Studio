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
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/it';
  const isExpertisePage = pathname.includes('/expertise');
  const isContactPage = pathname.includes('/contact');
  const isPrivacyPage = pathname.includes('/privacy-policy');
  const isTermsPage = pathname.includes('/terms-and-conditions');
  const isAboutPage = pathname.includes('/about');
  const isBlogPage = pathname.includes('/blog');

  return (
    <>
      {!isHomePage && !isExpertisePage && !isContactPage && !isPrivacyPage && !isTermsPage && !isAboutPage && !isBlogPage && <Header dictionary={dictionary} />}
      {children}
      {!isHomePage && !isExpertisePage && !isContactPage && !isPrivacyPage && !isTermsPage && !isAboutPage && !isBlogPage && <Footer />}
    </>
  );
}
