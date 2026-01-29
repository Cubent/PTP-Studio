'use client';

import type { ComponentProps } from 'react';

type AuthProviderProperties = {
  children: React.ReactNode;
  privacyUrl?: string;
  termsUrl?: string;
  helpUrl?: string;
};

// Placeholder auth provider - implement your own authentication
export const AuthProvider = ({
  children,
  ...properties
}: AuthProviderProperties) => {
  return <>{children}</>;
};
