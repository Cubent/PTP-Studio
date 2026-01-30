import { Metadata } from 'next';
import { Header } from '@/components/header';
import { FooterHomepage } from '@/components/footer-homepage';

export const metadata: Metadata = {
  title: 'Privacy Policy | PushToProd Studio',
  description: 'Privacy policy for PushToProd Studio: how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Dark section for header visibility */}
        <div className="bg-[#1a1a1a] pt-32 pb-16" data-section="hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-light text-white mb-4 italic" style={{ fontFamily: 'serif' }}>Privacy Policy</h1>
            <p className="text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
        
        {/* Content section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Name, email address, and contact information for project inquiries</li>
              <li>Company information and project requirements</li>
              <li>Payment and billing information for our services</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Usage Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Website analytics and usage patterns</li>
              <li>Email interaction metrics</li>
              <li>Service interaction data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide web development, design, and consulting services</li>
              <li>Manage project communications and deliverables</li>
              <li>Process payments and maintain billing records</li>
              <li>Improve our services and website experience</li>
              <li>Send important service-related communications</li>
              <li>Provide customer support and technical assistance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>With your explicit consent</li>
              <li>With trusted service providers (e.g., payment processors, hosting services)</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information</li>
              <li>Secure third-party service providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to enhance your experience and analyze usage patterns. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Project data is retained for 7 years for accounting purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
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
