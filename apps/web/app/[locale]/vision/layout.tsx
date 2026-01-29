import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Vision | PushToProd Studio',
  description: 'Learn about our vision, mission, and the team behind PushToProd Studio. We transform ideas into digital reality.',
};

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
