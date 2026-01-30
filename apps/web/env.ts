import { keys as flags } from '@repo/feature-flags/keys';
import { keys as core } from '@repo/next-config/keys';
import { keys as observability } from '@repo/observability/keys';
import { keys as rateLimit } from '@repo/rate-limit/keys';
import { keys as security } from '@repo/security/keys';
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  extends: [
    core(),
    observability(),
    flags(),
    security(),
    rateLimit(),
  ],
  server: {
    // App Configuration
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url('Valid app URL is required').default('https://pushtoprod.studio'),
    NEXT_PUBLIC_WEB_URL: z.string().url('Valid web URL is required').default('https://pushtoprod.studio'),
  },
  runtimeEnv: {
    // Client-side environment variables (must be prefixed with NEXT_PUBLIC_)
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
  },
});
