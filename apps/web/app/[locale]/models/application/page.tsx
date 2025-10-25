import React from 'react';
import type { Metadata } from 'next';
import ModelApplicationClient from './client';

export const metadata: Metadata = {
  title: 'Get Scouted - Velgance Agency',
  description: 'Become part of our international talent network. Fill out the application to start your career in the fashion world with Velgance Agency.',
  openGraph: {
    title: 'Get Scouted - Velgance Agency',
    description: 'Become part of our international talent network. Fill out the application to start your career in the fashion world with Velgance Agency.',
  },
};

export default function ModelApplicationPage() {
  return <ModelApplicationClient />;
}
