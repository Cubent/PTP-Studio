// Main layout component for the Cubent website
import './styles.css';
import { AnalyticsProvider } from '@repo/analytics';

import { DesignSystemProvider } from '@repo/design-system';
import { fonts } from '@repo/design-system/lib/fonts';
import { cn } from '@repo/design-system/lib/utils';
import { Toolbar } from '@repo/feature-flags/components/toolbar';
import { getDictionary } from '@repo/internationalization';
import type { ReactNode } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { PageWrapper } from './components/page-wrapper';
import { ConditionalHeaderFooter } from './components/conditional-header-footer';
import { PerformanceOptimizer } from '../../components/performance-optimizer';
import { PerformanceHints } from '../../components/seo-optimizer';
import { ErrorBoundary, ConsoleErrorSuppressor } from '../../components/error-boundary';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'PushToProd Studio - Web Development & Digital Solutions',
  description: 'We build custom web applications, mobile apps, and digital platforms that drive real business growth. Expert team of designers, engineers, and product leaders.',
  openGraph: {
    title: 'PushToProd Studio - Web Development & Digital Solutions',
    description: 'We build custom web applications, mobile apps, and digital platforms that drive real business growth. Expert team of designers, engineers, and product leaders.',
    url: 'https://pushtoprod.studio',
    siteName: 'PushToProd Studio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PushToProd Studio - Web Development Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PushToProd Studio - Web Development & Digital Solutions',
    description: 'We build custom web applications, mobile apps, and digital platforms that drive real business growth. Expert team of designers, engineers, and product leaders.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/faviconpushtoprod.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/faviconpushtoprod.png',
    apple: '/apple-touch-icon.png',
  },
};

type RootLayoutProperties = {
  readonly children: ReactNode;
  readonly params: Promise<{
    locale: string;
  }>;
};

const RootLayout = async ({ children, params }: RootLayoutProperties) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || headersList.get('x-invoke-path') || '';
  // No special page handling needed

  return (
    <>
      <ConsoleErrorSuppressor />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PushToProd Studio",
            "description": "Web development agency specializing in custom web applications, mobile apps, UI/UX design, and digital solutions. We build scalable products that drive business growth.",
            "url": "https://pushtoprod.studio",
            "logo": "https://pushtoprod.studio/faviconpushtoprod.png",
            "sameAs": [
              "https://www.linkedin.com/company/pushtoprod",
              "https://twitter.com/pushtoprodstudio",
              "https://www.instagram.com/pushtoprodstudio"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": "https://pushtoprod.studio/contact",
              "email": "hello@pushtoprod.studio"
            },
            "founder": {
              "@type": "Person",
              "name": "PushToProd Studio Founder"
            },
            "foundingDate": "2020",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "keywords": "web development, mobile app development, UI/UX design, custom software, web applications, e-commerce, AI solutions, digital agency, software development"
          })
        }}
      />
      
      {/* Application Page Specific Schema */}
      {pathname.includes('/models/application') && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Get Scouted - Velgance Agency",
              "description": "Become part of our international talent network. Fill out the application to start your career in the fashion world with Velgance Agency.",
              "url": "https://velgance.com/models/application",
              "image": {
                "@type": "ImageObject",
                "url": "https://i.postimg.cc/pXHkXTG6/Full-Body-Picture-7.png",
                "width": 1200,
                "height": 630,
                "alt": "Get Scouted - Velgance Agency Model Application"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Velgance Agency",
                "url": "https://velgance.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://i.postimg.cc/mrvCXXK5/Velgance-31.png"
                }
              },
              "mainEntity": {
                "@type": "Service",
                "name": "Model Application Service",
                "description": "Professional model application and scouting service for fashion industry talent",
                "provider": {
                  "@type": "Organization",
                  "name": "Velgance Agency"
                }
              }
            })
          }}
        />
      )}
      <ErrorBoundary>
        <AnalyticsProvider>
          <DesignSystemProvider>
              <PerformanceOptimizer />
              <PageWrapper>
                <ConditionalHeaderFooter dictionary={dictionary}>
                  {children}
                </ConditionalHeaderFooter>
              </PageWrapper>
            </DesignSystemProvider>
            <Toolbar />
          </AnalyticsProvider>
      </ErrorBoundary>
    </>
  );
};

export default RootLayout;
