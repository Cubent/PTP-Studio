type SignInProps = {
  fallbackRedirectUrl?: string;
  forceRedirectUrl?: string;
  signUpFallbackRedirectUrl?: string;
  signUpForceRedirectUrl?: string;
  afterSignInUrl?: string;
  afterSignUpUrl?: string;
};

// Clerk has been removed - implement your own authentication
export const SignIn = (props: SignInProps) => {
  return <div>Sign In component - implement your own authentication</div>;
};
