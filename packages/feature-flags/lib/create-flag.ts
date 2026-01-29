import { analytics } from '@repo/analytics/posthog/server';
import { flag } from 'flags/next';

export const createFlag = <T>(
  key: string,
  options: Parameters<typeof flag<T>>[1]
) =>
  flag<T>(key, {
    ...options,
    decide: async (context) => {
      // Auth removed - implement your own user ID logic
      const userId = null;

      if (userId && analytics) {
        analytics.identify({
          distinctId: userId,
        });
      }

      return options.decide(context);
    },
  });
