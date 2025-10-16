import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_TOKEN);

// Export templates
export * from './templates';