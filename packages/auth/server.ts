import 'server-only';

// Placeholder auth functions - implement your own authentication
export async function auth() {
  return { userId: null };
}

export async function currentUser() {
  return null;
}

export async function clerkClient() {
  throw new Error('Clerk has been removed. Implement your own authentication.');
}
