import { Metadata } from 'next';

type SEOOptimizerProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
};

export const generateSEOMetadata = ({
  title = 'Velgance - Trasformiamo il talento in opportunità',
  description = 'Velgance Model Management - Connettiamo talenti unici con le migliori opportunità del settore della moda.',
  keywords = ['agenzia modelli', 'modelle', 'casting', 'sfilate', 'shooting fotografici', 'video commerciali', 'eventi', 'hostess', 'steward', 'influencer marketing', 'fashion week', 'milano'],
  canonicalUrl = 'https://velgance.com',
  ogImage = 'https://velgance.com/og-image.png',
  structuredData
}: SEOOptimizerProps = {}): Metadata => {
  const baseMetadata: Metadata = {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Velgance Team' }],
    creator: 'Velgance Agency',
    publisher: 'Velgance Agency',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://velgance.com'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Velgance',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'it_IT',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@velgance_agency',
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };

  return baseMetadata;
};

export const generateStructuredData = (type: 'Organization' | 'WebSite' | 'Article' | 'Product', data: Record<string, any>) => {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseStructuredData,
        name: 'Velgance Agency',
        description: 'Dal 1998 trasformiamo il talento in opportunità. Agenzia di modelli professionisti per sfilate, shooting, video commerciali e eventi aziendali.',
        url: 'https://velgance.com',
        logo: 'https://velgance.com/favicon.svg',
        sameAs: [
          'https://instagram.com/velgance_agency',
          'https://facebook.com/velgance',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: 'https://velgance.com/contact',
          email: 'info@velgance.com',
        },
        founder: {
          '@type': 'Person',
          name: 'Velgance Founder',
        },
        foundingDate: '1998',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IT',
          addressLocality: 'Milano',
          streetAddress: 'Via della Moda, 123',
        },
        keywords: 'agenzia modelli, modelle, casting, sfilate, shooting fotografici, video commerciali, eventi, hostess, steward, influencer marketing, fashion week, milano',
        ...data,
      };

    case 'WebSite':
      return {
        ...baseStructuredData,
        name: 'Velgance',
        url: 'https://velgance.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://velgance.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        ...data,
      };

    case 'Article':
      return {
        ...baseStructuredData,
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Organization',
          name: 'Velgance Agency',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Velgance Agency',
          logo: {
            '@type': 'ImageObject',
            url: 'https://velgance.com/favicon.svg',
          },
        },
        datePublished: data.publishedAt,
        dateModified: data.updatedAt || data.publishedAt,
        ...data,
      };

    case 'Product':
      return {
        ...baseStructuredData,
        name: 'Velgance Agency Services',
        description: 'Professional modeling and entertainment services for fashion, advertising and events',
        brand: {
          '@type': 'Brand',
          name: 'Velgance Agency',
        },
        category: 'Entertainment & Fashion',
        offers: {
          '@type': 'Offer',
          url: 'https://velgance.com/contact',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
        ...data,
      };

    default:
      return { ...baseStructuredData, ...data };
  }
};

// Component for injecting structured data
export const StructuredData = ({ data }: { data: Record<string, any> }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
};

// Performance hints for critical resources
export const PerformanceHints = () => {
  return (
    <>
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      
      {/* Preconnect to critical domains */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource hints */}
      
      {/* Note: Font preloading removed as fonts may not exist at these paths */}
    </>
  );
};
