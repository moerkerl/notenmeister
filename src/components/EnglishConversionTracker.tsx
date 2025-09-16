'use client'

import { useEffect, useRef } from 'react'
import { getStoredTrackingParams, getGoogleClickId } from '@/lib/tracking'

// Use the same Google Ads ID as the German version
const GA_ADS_ID = 'AW-11550867447'
// Use the same conversion label as German version (or create a new one for English if needed)
const ENGLISH_CONVERSION_LABEL = 'd9xmCILN1YgbEPf_8IMr'

export default function EnglishConversionTracker() {
  const hasInitialized = useRef(false)
  const timer = useRef<NodeJS.Timeout | null>(null)
  
  useEffect(() => {
    // Prevent double initialization in React StrictMode
    if (hasInitialized.current) {
      console.log('EnglishConversionTracker already initialized');
      return;
    }
    
    // Check if conversion has already been tracked this session
    if (typeof window !== 'undefined' && window.sessionStorage.getItem('google_ads_conversion_tracked_en')) {
      console.log('Google Ads English conversion already tracked this session');
      return;
    }
    
    // Mark as initialized immediately to prevent double execution
    hasInitialized.current = true;
    
    // Mark that we're starting execution
    if (typeof window !== 'undefined') {
      const executionId = `conversion_execution_en_${Date.now()}_${Math.random()}`;
      window.sessionStorage.setItem('conversion_in_progress_en', executionId);
      
      // Clear the flag after a short delay (in case of errors)
      setTimeout(() => {
        const currentExecution = window.sessionStorage.getItem('conversion_in_progress_en');
        if (currentExecution === executionId) {
          window.sessionStorage.removeItem('conversion_in_progress_en');
        }
      }, 5000);
    }
    
    // Wait until gtag is available
    timer.current = setTimeout(() => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        // Get stored tracking parameters
        const trackingData = getStoredTrackingParams();
        const gclid = getGoogleClickId();
        
        // Enhanced Conversions: Send user data for better matching
        const userEmail = window.sessionStorage.getItem('user_email');
        if (userEmail) {
          window.gtag('set', 'user_data', {
            'email': userEmail,  // Google will hash this automatically
            'address': {}  // Can be extended with more user data if available
          });
          console.log('Enhanced Conversions data sent for better matching (English)');
        }
        
        // Generate unique transaction ID to prevent duplicates
        const transactionId = `lead_en_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        // Double-check that conversion hasn't been sent yet
        if (window.sessionStorage.getItem('google_ads_conversion_tracked_en')) {
          console.log('English conversion already tracked, skipping duplicate');
          window.sessionStorage.removeItem('conversion_in_progress_en');
          return;
        }
        
        // Mark as tracked BEFORE sending to prevent race conditions
        window.sessionStorage.setItem('google_ads_conversion_tracked_en', 'true');
        
        // Send Google Ads conversion event
        window.gtag('event', 'conversion', {
          'send_to': `${GA_ADS_ID}/${ENGLISH_CONVERSION_LABEL}`,
          'value': 1.0,
          'currency': 'CHF',
          'transaction_id': transactionId,
          'custom_parameters': {
            'landing_page': trackingData?.landingPage || '/',
            'traffic_source': trackingData?.params?.utm_source || 'direct',
            'form_completion_time': Date.now() - (trackingData?.timestamp || Date.now()),
            'language': 'english'
          }
        });
        
        console.log('Google Ads English conversion sent successfully', { transactionId });
        
        // Set Google Click ID globally if available (critical for conversion attribution)
        if (gclid) {
          window.gtag('set', { 'gclid': gclid });
        }
        
        // Send a thank you page event for GA4
        window.gtag('event', 'thank_you_page_view_en', {
          'event_category': 'Conversion English',
          'event_label': 'Lead Form successfully submitted',
          'value': 1.0,
          'currency': 'CHF',
          'transaction_id': transactionId,
          'page_location': window.location.href,
          'page_title': 'Thank You Page - Lead successfully sent',
          'traffic_source': trackingData?.params?.utm_source || 'direct',
          'landing_page': trackingData?.landingPage || '/',
          'form_completion_time': Date.now() - (trackingData?.timestamp || Date.now()),
          'language': 'english'
        });
        
        // Mark that conversion tracking completed
        window.sessionStorage.setItem('conversion_tracked_client_en', 'true');
        window.sessionStorage.removeItem('conversion_in_progress_en');
        
        console.log('Google Ads English conversion tracking completed:', {
          conversion_label: ENGLISH_CONVERSION_LABEL,
          transaction_id: transactionId,
          page: '/thank-you',
          gclid: gclid || 'none',
          utm_source: trackingData?.params?.utm_source || 'none',
          landing_page: trackingData?.landingPage || 'none',
          enhanced_conversions: !!userEmail,
          language: 'english'
        });
      }
    }, 2000); // 2 seconds wait to ensure gtag is fully loaded

    // Cleanup function
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return null; // This component renders nothing visible
}