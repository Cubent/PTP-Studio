import React from 'react';
import type { Metadata } from 'next';
import ModelApplicationClient from './client';

export const metadata: Metadata = {
  title: 'Candidati come Modello/a - Velgance Agency',
  description: 'Diventa parte del nostro network di talenti internazionali. Compila la domanda per iniziare la tua carriera nel mondo della moda con Velgance Agency.',
  openGraph: {
    title: 'Candidati come Modello/a - Velgance Agency',
    description: 'Diventa parte del nostro network di talenti internazionali. Compila la domanda per iniziare la tua carriera nel mondo della moda con Velgance Agency.',
  },
};

export default function ModelApplicationPage() {
  return <ModelApplicationClient />;
}
