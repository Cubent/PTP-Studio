import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnership Program | Velgance',
  description: 'Partner with Velgance modeling agency to discover new talent and collaborate on exciting projects. Connect with brands, photographers, and industry professionals.',
};

export default function PartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
