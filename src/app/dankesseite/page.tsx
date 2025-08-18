'use client'

import { useEffect } from 'react'
import ConversionTracker from '@/components/ConversionTracker'

export default function DankesseitePageComp() {
  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: 'Dankesseite - Notenmeister',
        page_location: window.location.href
      })
    }
  }, [])

  return (
    <>
      {/* Conversion Tracking Component */}
      <ConversionTracker />
      
      <div className="min-h-screen bg-green-50 flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vielen Dank für Ihr Vertrauen!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Ihre Anfrage wurde erfolgreich übermittelt. Unser Team wird Sie innerhalb von 24 Stunden kontaktieren.
            </p>

            {/* Next Steps */}
            <div className="space-y-6 text-left bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-4">
                Was passiert als nächstes?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Persönliches Strategiegespräch</h3>
                    <p className="text-gray-600 text-sm">
                      Ein Lernexperte ruft Sie an und bespricht die individuellen Bedürfnisse Ihres Kindes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Passenden Lehrer finden</h3>
                    <p className="text-gray-600 text-sm">
                      Wir wählen aus über 7&apos;000 Lehrern den perfekten Match für Ihr Kind aus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Unverbindliche Probelektion</h3>
                    <p className="text-gray-600 text-sm">
                      Der Lehrer kommt zu Ihnen nach Hause für eine kostenlose Kennenlernstunde.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-600 mb-4">
                Haben Sie Fragen oder möchten Sie uns direkt kontaktieren?
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <span className="text-[#059669]">📞</span>
                  <span className="text-sm font-medium text-gray-900">078 314 62 65</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-[#059669]">✉️</span>
                  <span className="text-sm font-medium text-gray-900">info@notenmeister.ch</span>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-center items-center space-x-2">
                <span className="text-green-500">🔒</span>
                <span className="text-xs text-gray-500">
                  Ihre Daten sind bei uns sicher und werden vertraulich behandelt
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}