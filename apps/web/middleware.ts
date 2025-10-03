import { env } from '@/env';
import { authMiddleware } from '@repo/auth/middleware';
import { internationalizationMiddleware } from '@repo/internationalization/middleware';
import {
  noseconeMiddleware,
  noseconeOptions,
  noseconeOptionsWithToolbar,
} from '@repo/security/middleware';
import {
  type NextMiddleware,
  type NextRequest,
  NextResponse,
} from 'next/server';

export const config = {
  // matcher tells Next.js which routes to run the middleware on. This runs the
  // middleware on all routes except for static assets and Posthog ingest
  // Include API routes that need authentication
  // Include API routes that need authentication
  matcher: [
    // Match all routes except those starting with a dot or within _next directory
    '/((?!.*\\..*|_next).*)',
    // Match the root route
    '/',
    // Match API routes that need authentication
    '/(api|trpc)(.*)',
  ],
};

const securityHeaders = env.FLAGS_SECRET
  ? noseconeMiddleware(noseconeOptionsWithToolbar)
  : noseconeMiddleware(noseconeOptions);

const middleware = authMiddleware({
  // Exclude public routes from auth middleware to prevent SEO issues
  publicRoutes: [
    '/',
    '/it',
    '/en', 
    '/models',
    '/it/models',
    '/en/models',
    '/female-models',
    '/it/female-models',
    '/en/female-models',
    '/male-models',
    '/it/male-models',
    '/en/male-models',
    '/chi-siamo',
    '/it/chi-siamo',
    '/en/chi-siamo',
    '/privacy-policy',
    '/it/privacy-policy',
    '/en/privacy-policy',
    '/terms-and-conditions',
    '/it/terms-and-conditions',
    '/en/terms-and-conditions',
    '/contact',
    '/it/contact',
    '/en/contact',
    '/sign-in',
    '/it/sign-in',
    '/en/sign-in',
    '/sign-up',
    '/it/sign-up',
    '/en/sign-up',
    '/api/webhooks/clerk',
    '/api/models',
    '/api/contact'
  ],
  ignoredRoutes: [
    '/_next',
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml'
  ]
}, async (_auth, request) => {
  // Skip i18n middleware for API routes
  if (!request.nextUrl.pathname.startsWith('/api/')) {
    const i18nResponse = internationalizationMiddleware(
      request as unknown as NextRequest
    );
    if (i18nResponse) {
      return i18nResponse;
    }
  }

  // Skip Arcjet for now to reduce middleware size
  // TODO: Re-enable when middleware size limit is increased or Arcjet is optimized
  // if (!env.ARCJET_KEY) {
    const response = securityHeaders();
    
    // Add SEO-friendly headers for public routes
    if (request.nextUrl.pathname.startsWith('/') && 
        !request.nextUrl.pathname.startsWith('/api/') &&
        !request.nextUrl.pathname.startsWith('/admin/')) {
      response.headers.set('X-Robots-Tag', 'index, follow');
      response.headers.set('Cache-Control', 'public, max-age=3600');
    }
    
    return response;
  // }

  // Arcjet security disabled to reduce middleware bundle size
  // try {
  //   const { secure } = await import('@repo/security');
  //   await secure(
  //     [
  //       // See https://docs.arcjet.com/bot-protection/identifying-bots
  //       'CATEGORY:SEARCH_ENGINE', // Allow search engines
  //       'CATEGORY:PREVIEW', // Allow preview links to show OG images
  //       'CATEGORY:MONITOR', // Allow uptime monitoring services
  //     ],
  //     request
  //   );
  //   return securityHeaders();
  // } catch (error) {
  //   const { parseError } = await import('@repo/observability/error');
  //   const message = parseError(error);
  //   return NextResponse.json({ error: message }, { status: 403 });
  // }
}) as unknown as NextMiddleware;

export default middleware;
