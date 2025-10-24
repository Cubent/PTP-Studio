import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clienti - Velgance',
  description: 'Fidati da oltre 200+ marchi di moda europei e case di moda internazionali.',
  keywords: 'clienti, marchi moda, fashion brands, collaborazioni, partnership',
  openGraph: {
    title: 'Clienti - Velgance',
    description: 'Fidati da oltre 200+ marchi di moda europei e case di moda internazionali.',
    type: 'website',
    url: 'https://velgance.com/partners',
    images: [
      {
        url: 'https://1000logos.net/wp-content/uploads/2017/01/Gucci-Logo-640x400.png',
        width: 640,
        height: 400,
        alt: 'Clienti Velgance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clienti - Velgance',
    description: 'Fidati da oltre 200+ marchi di moda europei e case di moda internazionali.',
    images: ['https://1000logos.net/wp-content/uploads/2017/01/Gucci-Logo-640x400.png'],
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://1000logos.net/wp-content/uploads/2017/01/Gucci-Logo-640x400.png",
    "description": "Fidati da oltre 200+ marchi di moda europei e case di moda internazionali.",
    "name": "Clienti",
    "aggregateRating": {
      "@type": "AggregateRating",
      "bestRating": "5",
      "ratingCount": "189",
      "ratingValue": "4.8",
      "itemReviewed": {
        "@type": "Thing",
        "name": "Clienti"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
