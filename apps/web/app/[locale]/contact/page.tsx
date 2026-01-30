'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { FooterHomepage } from '@/components/footer-homepage';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [selectedUrgency, setSelectedUrgency] = useState<string>('');

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    formData.append('services', selectedServices.join(', '));
    formData.append('budget', selectedBudget);
    formData.append('urgency', selectedUrgency);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (!response.ok || result.error) {
        setSubmitStatus({ 
          type: 'error', 
          message: result.error || 'Failed to send message. Please try again.' 
        });
      } else {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! We will get back to you soon.' 
        });
        (e.target as HTMLFormElement).reset();
        setSelectedServices([]);
        setSelectedBudget('');
        setSelectedUrgency('');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      
      <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-2xl mx-auto pb-20">
          {/* Status Messages */}
          {submitStatus.type && (
            <div className={`mb-8 p-4 rounded-2xl ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* What do you want to talk about? */}
            <div>
              <h2 className="text-white text-xl sm:text-2xl font-light mb-6 text-center">
                What do you want to talk about?
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Mobile App', 'Website', 'Web App', 'UX/UI Design', 'Branding', 'Other'].map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceToggle(service)}
                    className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                      selectedServices.includes(service)
                        ? 'border-white bg-white text-black'
                        : 'border-white/30 text-white hover:border-white/60'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* What's your name? */}
            <div>
              <h2 className="text-white text-xl sm:text-2xl font-light mb-4 text-center">
                What's your name?
              </h2>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-6 py-4 rounded-full border-2 border-white/30 bg-transparent text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors"
              />
            </div>

            {/* What's your phone number? */}
            <div>
              <h2 className="text-white text-xl sm:text-2xl font-light mb-4 text-center">
                What's your phone number?
              </h2>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                className="w-full px-6 py-4 rounded-full border-2 border-white/30 bg-transparent text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors"
              />
            </div>

            {/* What's your company name? */}
            <div>
              <h2 className="text-white text-xl sm:text-2xl font-light mb-4 text-center">
                What's your company name?
              </h2>
              <input
                type="text"
                name="company"
                placeholder="Your company name"
                className="w-full px-6 py-4 rounded-full border-2 border-white/30 bg-transparent text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors"
              />
            </div>

            {/* Your email */}
            <div>
              <h2 className="text-white text-xl sm:text-2xl font-light mb-4 text-center">
                Your email
              </h2>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full px-6 py-4 rounded-full border-2 border-white/30 bg-transparent text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors"
              />
            </div>

            {/* What's your maximum budget? */}
            <div>
              <h2 className="text-white text-xl sm:text-2xl font-light mb-6 text-center">
                What's your maximum budget?
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {['€ 1K-5K', '€ 6K-15K', '€ 20K-50K'].map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => setSelectedBudget(budget)}
                    className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                      selectedBudget === budget
                        ? 'border-white bg-white text-black'
                        : 'border-white/30 text-white hover:border-white/60'
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* How urgent is this? */}
            <div>
              <h2 className="text-white text-xl sm:text-2xl font-light mb-6 text-center">
                How urgent is this?
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Low 😊', value: 'low' },
                  { label: 'Medium 😐', value: 'medium' },
                  { label: 'High 😰', value: 'high' }
                ].map((urgency) => (
                  <button
                    key={urgency.value}
                    type="button"
                    onClick={() => setSelectedUrgency(urgency.value)}
                    className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                      selectedUrgency === urgency.value
                        ? 'border-white bg-white text-black'
                        : 'border-white/30 text-white hover:border-white/60'
                    }`}
                  >
                    {urgency.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tell us about your project */}
            <div>
              <h2 className="text-white text-xl sm:text-2xl font-light mb-4 text-center">
                Tell us about your project
              </h2>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us about your project"
                className="w-full px-6 py-4 rounded-3xl border-2 border-white/30 bg-transparent text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            {/* reCAPTCHA notice */}
            <p className="text-white/60 text-sm text-center">
              This form is protected with reCAPTCHA technology from Google
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? 'Sending...' : 'Send request'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}