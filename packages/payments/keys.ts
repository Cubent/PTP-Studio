import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Stripe has been removed
export const keys = () =>
  createEnv({
    server: {},
    runtimeEnv: {},
  });
