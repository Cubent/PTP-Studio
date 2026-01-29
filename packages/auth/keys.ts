import { createEnv } from '@t3-oss/env-nextjs';

// Clerk has been removed - no auth environment variables needed
export const keys = () =>
  createEnv({
    server: {},
    client: {},
    runtimeEnv: {},
  });
