import 'server-only';

// Stripe has been removed - implement your own payment processing
export const stripe = null;

export type Stripe = any;

export const TRAVIRA_PRICE_ID = '';
export const MEMBER_PLAN_LOOKUP_KEY = '';

export interface CreateSubscriptionParams {
  customerId: string;
  priceId?: string;
  successUrl: string;
  cancelUrl: string;
}

export interface CreateCustomerParams {
  email: string;
  name?: string;
  userId: string;
}

export async function createTraviraCustomer(params: CreateCustomerParams): Promise<any> {
  throw new Error('Stripe has been removed. Implement your own payment processing.');
}

export async function createTraviraCheckoutSession(params: CreateSubscriptionParams): Promise<any> {
  throw new Error('Stripe has been removed. Implement your own payment processing.');
}

export async function createMemberPlanCheckoutSession(params: CreateSubscriptionParams): Promise<any> {
  throw new Error('Stripe has been removed. Implement your own payment processing.');
}

export async function createBillingPortalSession(customerId: string, returnUrl: string): Promise<any> {
  throw new Error('Stripe has been removed. Implement your own payment processing.');
}

export async function getCustomerSubscription(customerId: string): Promise<any> {
  throw new Error('Stripe has been removed. Implement your own payment processing.');
}

export async function cancelSubscription(subscriptionId: string): Promise<any> {
  throw new Error('Stripe has been removed. Implement your own payment processing.');
}

export async function reactivateSubscription(subscriptionId: string): Promise<any> {
  throw new Error('Stripe has been removed. Implement your own payment processing.');
}
