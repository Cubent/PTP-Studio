import { Metadata } from 'next';
import { Header } from '@/components/header';
import { FooterHomepage } from '@/components/footer-homepage';

export const metadata: Metadata = {
  title: 'Terms and Conditions | PushToProd Studio',
  description: 'Terms and conditions for using PushToProd Studio services.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Dark section for header visibility */}
        <div className="bg-[#1a1a1a] pt-32 pb-16" data-section="hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-light text-white mb-4 italic" style={{ fontFamily: 'serif' }}>Terms and Conditions</h1>
            <p className="text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
        
        {/* Content section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using PushToProd Studio's services, you accept and agree to be bound by the terms and conditions of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-700 mb-4">
              PushToProd Studio is a web development agency that provides custom web applications, mobile apps, UI/UX design, and digital consulting services. We work with businesses to create scalable digital solutions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Project Terms and Payment</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Project scope, timeline, and costs are defined in individual project agreements</li>
              <li>Payment terms are specified in project contracts</li>
              <li>Payments are processed through secure third-party providers</li>
              <li>Refunds and cancellations follow the terms outlined in project agreements</li>
              <li>Late payments may result in project suspension</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Client Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate project requirements and timely feedback</li>
              <li>Supply necessary content, assets, and access credentials</li>
              <li>Ensure all provided materials comply with applicable laws</li>
              <li>Maintain communication throughout the project lifecycle</li>
              <li>Review and approve deliverables within agreed timeframes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Upon full payment, clients receive ownership of custom code and designs</li>
              <li>We retain rights to reusable components and frameworks</li>
              <li>Third-party libraries and tools remain under their respective licenses</li>
              <li>We may showcase completed projects in our portfolio unless otherwise agreed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Warranties and Disclaimers</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>We provide bug fixes for 30 days after project delivery</li>
              <li>Services are provided "as is" without warranties beyond those specified in contracts</li>
              <li>We are not responsible for third-party service failures</li>
              <li>Performance depends on hosting, infrastructure, and external factors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              PushToProd Studio shall not be liable for indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill. Our total liability is limited to the amount paid for services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700 mb-4">
              Either party may terminate the agreement with written notice. Upon termination, payment is due for work completed. Clients receive deliverables for paid work.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. Users will be notified of significant changes. Continued use of services constitutes acceptance of updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms and Conditions, please contact us at:
              <br />
              Email: hello@pushtoprod.studio
            </p>
          </section>
        </div>
      </div>
    </div>
    
    <FooterHomepage />
    </>
  );
}
