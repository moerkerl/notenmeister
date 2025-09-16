'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import EnglishConversionTracker from '@/components/EnglishConversionTracker'

export default function ThankYouPage() {
  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: 'Thank You Page - Notenmeister',
        page_location: window.location.href
      })
    }
  }, [])

  return (
    <>
      {/* Conversion Tracking Component */}
      <EnglishConversionTracker />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
        {/* Hero Section with Success Message */}
        <div className="pt-16 pb-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                  <svg 
                    className="w-16 h-16 text-green-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="3" 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2">
                  <span className="flex h-8 w-8">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-8 w-8 bg-green-500"></span>
                  </span>
                </div>
              </div>
            </div>

            {/* Thank You Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thank you for your trust!
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Your request has been successfully submitted. Our team will contact you within{' '}
              <span className="text-[#059669] font-bold">24 hours</span>.
            </p>
            
            <p className="text-lg text-gray-500">
              Your request number: <span className="font-mono font-semibold">#{Date.now().toString().slice(-6)}</span>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          {/* Process Timeline */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
              What happens next?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#059669]">1</span>
                </div>
                <h3 className="font-semibold mb-2">Personal Strategy Consultation</h3>
                <p className="text-sm text-gray-600">A learning expert will call you and discuss your child&apos;s individual needs.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#059669]">2</span>
                </div>
                <h3 className="font-semibold mb-2">Find the Perfect Tutor</h3>
                <p className="text-sm text-gray-600">We select the perfect match for your child from over 7,000 tutors.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#059669]">3</span>
                </div>
                <h3 className="font-semibold mb-2">Non-binding Trial Lesson</h3>
                <p className="text-sm text-gray-600">The tutor comes to your home for a free introductory lesson.</p>
              </div>
            </div>
          </div>

          {/* 6-Step Methodology Reminder */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Our proven 6-step methodology awaits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#059669] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <p className="font-medium">Learning type analysis</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#059669] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <p className="font-medium">Tailored learning strategy</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#059669] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <p className="font-medium">Build self-confidence</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#059669] text-white rounded-full flex items-center justify-center font-bold">4</div>
                <p className="font-medium">Resolve learning blocks</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#059669] text-white rounded-full flex items-center justify-center font-bold">5</div>
                <p className="font-medium">Sustainable techniques</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#059669] text-white rounded-full flex items-center justify-center font-bold">6</div>
                <p className="font-medium">Autonomous learning</p>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-600">
              Turn the downward spiral into a success spiral - we&apos;ll show you how!
            </p>
          </div>

          {/* Trust Building Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Why Notenmeister */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Why Notenmeister?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Over 7,000 Qualified Tutors</h3>
                    <p className="text-gray-600 text-sm">All tutors are carefully selected and trained</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Proven 6-Step Methodology</h3>
                    <p className="text-gray-600 text-sm">Systematic approach for sustainable success</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Individual Support</h3>
                    <p className="text-gray-600 text-sm">Customized learning plans for every student</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Flexibility</h3>
                    <p className="text-gray-600 text-sm">At home or online - you decide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stats */}
            <div className="bg-gradient-to-br from-[#059669] to-[#047857] rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">
                Breaking the downward spiral since 2016
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">15,000+</div>
                  <div className="text-green-100 text-sm">Students helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">7,000+</div>
                  <div className="text-green-100 text-sm">Qualified tutors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-green-100 text-sm">Success rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4.9/5</div>
                  <div className="text-green-100 text-sm">Average rating</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-green-400">
                <p className="text-sm opacity-90">
                  &ldquo;The 6-step methodology really works! Our daughter went from struggling to thriving.&rdquo;
                </p>
                <p className="text-xs mt-2 opacity-75">- The Martinez Family from Geneva</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-green-50 rounded-2xl p-8 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Do you have any questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Our consultation team is happy to assist you
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="font-semibold mb-2">By Phone</h3>
                  <a href="tel:+41783146265" className="text-[#059669] font-bold text-lg hover:text-[#047857]">
                    078 314 62 65
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8:00-18:00</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-3xl mb-3">✉️</div>
                  <h3 className="font-semibold mb-2">By Email</h3>
                  <a href="mailto:info@notenmeister.ch" className="text-[#059669] font-bold hover:text-[#047857]">
                    info@notenmeister.ch
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Response within 24h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">
              Would you like to learn more?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="px-8 py-4 bg-[#059669] text-white font-semibold rounded-lg hover:bg-[#047857] transition-colors text-center shadow-lg"
              >
                Go to Homepage
              </Link>
              <Link 
                href="/lp/tutoring"
                className="px-8 py-4 bg-white text-[#059669] font-semibold rounded-lg border-2 border-[#059669] hover:bg-green-50 transition-colors text-center shadow-lg"
              >
                Learn More About Our Method
              </Link>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex justify-center items-center space-x-2">
              <span className="text-green-500">🔒</span>
              <span className="text-xs text-gray-500">
                Your data is safe with us and will be treated confidentially
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}