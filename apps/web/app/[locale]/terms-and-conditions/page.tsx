import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Velgance',
  description: 'Terms and conditions for using Velgance modeling agency services.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#f9f7ee]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#045530] mb-8">Terms and Conditions</h1>
          <p className="text-[#045530] mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Velgance modeling agency services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-700 mb-4">
              Velgance is a modeling agency that connects talented models with brands, photographers, and companies. We facilitate collaborations and provide talent management services for fashion, commercial, and entertainment industries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Subscription and Payment</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Subscription fees are charged annually at $99/year</li>
              <li>Payment is processed through Stripe</li>
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>Refunds are provided within 7 days of initial purchase</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the service only for personal, non-commercial purposes</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimers</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Model availability is subject to scheduling and booking confirmations</li>
              <li>We do not guarantee specific bookings or collaborations</li>
              <li>Final agreements are made directly between clients and models</li>
              <li>We are not responsible for disputes between clients and models</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Velgance shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-700 mb-4">
              Either party may terminate this agreement at any time. Upon termination, your access to the service will cease, but you will continue to receive notifications until the end of your billing period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. Users will be notified of significant changes via email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms and Conditions, please contact us at:
              <br />
              Email: info@velgance.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
