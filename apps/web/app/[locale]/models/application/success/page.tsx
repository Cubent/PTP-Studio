import React from 'react';
import type { Metadata } from 'next';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Application Submitted - Velgance Agency',
  description: 'Your application has been submitted successfully. We will contact you soon for the next steps.',
};

export default function ApplicationSuccessPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        
        <h1 className="text-3xl font-light text-black mb-4 italic" style={{ fontFamily: 'serif' }}>
          Application Submitted!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your application. Our team will review it and contact you soon for the next steps.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back to homepage
          </Link>
          
          <p className="text-sm text-gray-500">
            Have questions? Contact us at{' '}
            <a href="mailto:info@velgance.com" className="text-black hover:underline">
              info@velgance.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
