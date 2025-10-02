import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Chi Siamo | Velgance Agency',
  description: 'Dal 1998 trasformiamo il talento in opportunità. Scopri la storia di Velgance Agency, agenzia di modelli professionisti con sedi ad Amsterdam, Milano e Londra.',
};

export default function ChiSiamoLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
