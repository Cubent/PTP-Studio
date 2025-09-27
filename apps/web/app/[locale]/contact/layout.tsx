import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Velgance',
  description: 'Get in touch with Velgance for modeling opportunities, collaborations, or questions about our talent agency services.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}