import React from 'react';
import type { Metadata } from 'next';
import ModelApplicationClient from './client';

export const metadata: Metadata = {
  title: 'Get Scouted - Velgance Agency',
  description: 'Become part of our international talent network. Fill out the application to start your career in the fashion world with Velgance Agency.',
  openGraph: {
    title: 'Get Scouted - Velgance Agency',
    description: 'Become part of our international talent network. Fill out the application to start your career in the fashion world with Velgance Agency.',
    images: [
      {
        url: 'https://i.postimg.cc/pXHkXTG6/Full-Body-Picture-7.png',
        width: 1200,
        height: 630,
        alt: 'Get Scouted - Velgance Agency Model Application',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Scouted - Velgance Agency',
    description: 'Become part of our international talent network. Fill out the application to start your career in the fashion world with Velgance Agency.',
    images: ['https://i.postimg.cc/pXHkXTG6/Full-Body-Picture-7.png'],
  },
};

export default function ModelApplicationPage() {
  return <ModelApplicationClient />;
}
