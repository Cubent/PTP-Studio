// Main layout component for the Cubent website
import './styles.css';
import { AnalyticsProvider } from '@repo/analytics';
import { AuthProvider } from '@repo/auth/provider';

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
import { ReferralTracker } from '../../components/ReferralTracker';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'Velgance - Trasformiamo il talento in opportunità',
  description: 'Velgance Model Management - Connettiamo talenti unici con le migliori opportunità del settore della moda.',
  openGraph: {
    title: 'Velgance - Trasformiamo il talento in opportunità',
    description: 'Velgance Model Management - Connettiamo talenti unici con le migliori opportunità del settore della moda.',
    url: 'https://velgance.com',
    siteName: 'Velgance',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Velgance - Modeling Agency',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velgance - Trasformiamo il talento in opportunità',
    description: 'Velgance Model Management - Connettiamo talenti unici con le migliori opportunità del settore della moda.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.png',
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
            "name": "Velgance Agency",
            "description": "Since 1998 we transform talent into opportunities. Professional modeling agency for fashion shows, photo shoots, commercial videos and corporate events.",
            "url": "https://velgance.com",
            "logo": "https://velgance.com/favicon.svg",
            "sameAs": [
              "https://instagram.com/velgance_agency",
              "https://facebook.com/velgance"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": "https://velgance.com/contact",
              "email": "info@velgance.com"
            },
            "founder": {
              "@type": "Person",
              "name": "Velgance Founder"
            },
            "foundingDate": "1998",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IT",
              "addressLocality": "Milano",
              "streetAddress": "Via Felice Bellotti, 12"
            },
            "keywords": "modeling agency, models, casting, fashion shows, photo shoots, commercial videos, events, hostess, steward, influencer marketing, fashion week, milan"
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
      <ReferralTracker />
      <ErrorBoundary>
        <AuthProvider>
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
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
};

export default RootLayout;
