'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useCSRF, addCSRFHeader } from '@/hooks/useCSRF'
import { useTrackingParams } from '@/hooks/useTrackingParams'

const gradeOptions = [
  // Primary School (corresponds to 1.-6. Klasse Primar)
  '1st Grade Primary',
  '2nd Grade Primary',
  '3rd Grade Primary',
  '4th Grade Primary',
  '5th Grade Primary',
  '6th Grade Primary',
  // Secondary School (corresponds to 1.-3. Sek A/B/C)
  '1st Year Secondary A',
  '1st Year Secondary B',
  '1st Year Secondary C',
  '2nd Year Secondary A',
  '2nd Year Secondary B',
  '2nd Year Secondary C',
  '3rd Year Secondary A',
  '3rd Year Secondary B',
  '3rd Year Secondary C',
  // Gymnasium (corresponds to 1.-6. Klasse Gymnasium)
  '1st Year Gymnasium',
  '2nd Year Gymnasium',
  '3rd Year Gymnasium',
  '4th Year Gymnasium',
  '5th Year Gymnasium',
  '6th Year Gymnasium',
  // Post-Secondary (corresponds to Lehre, Studium, etc.)
  'Apprenticeship',
  'University Studies',
  'Vocational School',
  'University of Applied Sciences',
  'University',
  // Other
  'Other'
]

const subjectExamples = [
  'Mathematics',
  'French',
  'German',
  'English',
  'Homework Help',
  'Exam Preparation'
]

const initialState = {
  student: '',
  grade: '',
  subject: '',
  postcode: '',
  lastname: '',
  phone: '',
  email: ''
}

// Helper function to get descriptive step names for analytics
const getStepName = (stepNumber: number): string => {
  const stepNames: Record<number, string> = {
    1: 'who_needs_tutoring',
    2: 'grade_selection',
    3: 'subject_selection', 
    4: 'postcode_entry',
    5: 'contact_details'
  }
  return stepNames[stepNumber] || `step_${stepNumber}`
}

export default function EnglishMultiStepForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const { token: csrfToken } = useCSRF()
  const { trackingParams, gclid, utmParams } = useTrackingParams()
  
  // Analytics tracking refs
  const sessionIdRef = useRef<string>('')
  const formStartTimeRef = useRef<number>(Date.now())
  const highestStepReachedRef = useRef<number>(1)
  const stepsVisitedRef = useRef<Set<number>>(new Set([1]))
  const currentStepRef = useRef<number>(1)
  
  // Initialize session tracking on mount
  useEffect(() => {
    // Copy initial ref values to avoid stale closure warnings
    const initialFormStartTime = Date.now()
    formStartTimeRef.current = initialFormStartTime
    
    // Generate or retrieve session ID
    let sessionId = sessionStorage.getItem('form_session_id_en')
    if (!sessionId) {
      sessionId = `form_en_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      sessionStorage.setItem('form_session_id_en', sessionId)
      sessionStorage.setItem('form_start_time_en', initialFormStartTime.toString())
      
      // Track form start event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_start_en', {
          'event_category': 'Lead Form English',
          'event_label': 'find_teacher',
          'form_id': 'multi_step_lead_form_en',
          'form_session_id': sessionId
        })
      }
    }
    sessionIdRef.current = sessionId
    
    // Retrieve highest step if returning user
    const savedHighestStep = sessionStorage.getItem('form_highest_step_en')
    if (savedHighestStep) {
      highestStepReachedRef.current = parseInt(savedHighestStep)
    }
    
    // Create copies of ref values for cleanup function
    const formStartTime = initialFormStartTime
    const stepsVisited = stepsVisitedRef.current
    
    // Track form abandon on unmount
    return () => {
      // Use copied values from the effect scope
      const currentStep = currentStepRef.current
      const highestStepReached = highestStepReachedRef.current
      const stepsVisitedSize = stepsVisited.size
      const sessionIdCopy = sessionIdRef.current
      
      // Only track abandon if form wasn't completed
      if (currentStep < 5 && typeof window !== 'undefined' && window.gtag) {
        const timeSpent = Date.now() - formStartTime
        window.gtag('event', 'form_abandon_en', {
          'event_category': 'Lead Form English',
          'event_label': `Abandoned at ${getStepName(currentStep)}`,
          'value': currentStep,
          'form_session_id': sessionIdCopy,
          'time_spent_seconds': Math.round(timeSpent / 1000),
          'highest_step_reached': highestStepReached,
          'steps_visited_count': stepsVisitedSize
        })
      }
    }
  }, []) // Only run on mount
  
  // Track step changes
  useEffect(() => {
    // Update current step ref
    currentStepRef.current = step
    
    if (typeof window !== 'undefined' && window.gtag && sessionIdRef.current) {
      const previousStep = parseInt(sessionStorage.getItem('form_current_step_en') || '1')
      
      // Track step view (always, for navigation analysis)
      window.gtag('event', 'form_step_view_en', {
        'event_category': 'Lead Form Navigation English',
        'event_label': getStepName(step),
        'value': step,
        'session_id': sessionIdRef.current,
        'navigation_direction': step > previousStep ? 'forward' : step < previousStep ? 'backward' : 'refresh',
        'previous_step': previousStep
      })
      
      // Track progress only if this is a new highest step
      if (step > highestStepReachedRef.current) {
        highestStepReachedRef.current = step
        sessionStorage.setItem('form_highest_step_en', step.toString())
        
        window.gtag('event', 'form_progress_en', {
          'event_category': 'Lead Form English',
          'event_label': `Reached ${getStepName(step)}`,
          'value': step,
          'form_session_id': sessionIdRef.current,
          'form_id': 'multi_step_lead_form_en',
          'step_name': getStepName(step)
        })
      }
      
      // Track if step was visited for the first time in this session
      if (!stepsVisitedRef.current.has(step)) {
        stepsVisitedRef.current.add(step)
        
        window.gtag('event', 'form_step_first_view_en', {
          'event_category': 'Lead Form English',
          'event_label': `First view of ${getStepName(step)}`,
          'value': step,
          'form_session_id': sessionIdRef.current,
          'step_name': getStepName(step)
        })
      }
      
      // Save current step
      sessionStorage.setItem('form_current_step_en', step.toString())
    }
  }, [step])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleChangeWithAutoAdvance = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    
    // Auto-advance for grade selection
    if (name === 'grade' && value && step === 2) {
      setTimeout(() => {
        setError('')
        setStep(step + 1)
      }, 300)
    }
    
    // Auto-advance for postcode when 4 characters are entered
    if (name === 'postcode' && value.length === 4 && step === 4) {
      setTimeout(() => {
        setError('')
        setStep(step + 1)
      }, 300)
    }
  }

  const handleSelectWithAutoAdvance = (name: string, value: string) => {
    setForm({ ...form, [name]: value })
    setTimeout(() => {
      setError('')
      setStep(step + 1)
    }, 300)
  }

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setError('')
    
    // Validation per step
    if (step === 1 && !form.student) return setError('Please select an option.')
    if (step === 2 && !form.grade) return setError('Please select or enter a grade/level.')
    if (step === 3 && !form.subject) return setError('Please enter the tutoring subject.')
    if (step === 4 && !form.postcode) return setError('Please enter your postcode.')
    
    setStep(step + 1)
  }

  const handleBack = () => {
    setError('')
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Validation
    if (!form.lastname || !form.phone || !form.email) {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)
    
    // Store email in sessionStorage for Enhanced Conversions (consent-independent)
    if (typeof window !== 'undefined' && form.email) {
      window.sessionStorage.setItem('user_email', form.email);
    }
    
    try {
      // Prepare form data with tracking parameters and English language marker
      const formDataWithTracking = {
        // Map English form fields to German backend fields
        schueler: form.student,
        klasse: form.grade,
        fach: form.subject,
        plz: form.postcode,
        nachname: form.lastname,
        telefon: form.phone,
        email: form.email,
        // Language marker for HubSpot
        language: 'english',
        utm_website_contact: 'notenmeister.ch/en',
        // Add tracking parameters for attribution
        gclid: gclid || undefined,
        ...utmParams,
        trackingParams: trackingParams || undefined
      }
      
      // Send data to our API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: addCSRFHeader({
          'Content-Type': 'application/json',
        }, csrfToken),
        body: JSON.stringify(formDataWithTracking)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'An error occurred')
      }

      if (data.success) {
        // Track successful form completion
        if (typeof window !== 'undefined' && window.gtag) {
          const totalTimeSpent = Date.now() - formStartTimeRef.current
          window.gtag('event', 'form_complete_en', {
            'event_category': 'Lead Form English',
            'event_label': 'Successfully submitted',
            'value': 100, // 100 = completed
            'form_session_id': sessionIdRef.current,
            'time_spent_seconds': Math.round(totalTimeSpent / 1000),
            'steps_visited_count': stepsVisitedRef.current.size,
            'form_id': 'multi_step_lead_form_en'
          })
          
          // Clear session data after successful submission
          sessionStorage.removeItem('form_session_id_en')
          sessionStorage.removeItem('form_highest_step_en')
          sessionStorage.removeItem('form_current_step_en')
          sessionStorage.removeItem('form_start_time_en')
        }
        
        // Redirect to thank you page
        router.push('/thank-you')
      } else {
        throw new Error(data.error || 'An error occurred')
      }
    } catch (err) {
      // Handle submission error
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again later.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      {/* Progress indicator */}
      {step <= 5 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-[#059669] font-semibold">Question {step} of 5</div>
            <div className="text-gray-500 text-sm">{Math.round((step / 5) * 100)}% complete</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#059669] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Step 1: Who needs tutoring */}
      {step === 1 && (
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Who needs tutoring?
          </h2>
          <div className="grid grid-cols-1 gap-3 mb-6">
            {['My daughter', 'My son', 'I', 'Someone else'].map((option, index) => {
              // Map display text to internal value for consistency with German form
              const internalValue = {
                'My daughter': 'my-daughter',
                'My son': 'my-son', 
                'I': 'i',
                'Someone else': 'someone-else'
              }[option] || option.toLowerCase().replace(' ', '-');
              
              return (
                <button
                  key={index}
                  type="button"
                  className={`border-2 rounded-lg px-6 py-4 text-left transition-all font-medium cursor-pointer ${
                    form.student === internalValue
                      ? 'border-[#059669] bg-green-50 text-[#059669]'
                      : 'border-gray-300 hover:border-green-400 text-gray-700'
                  }`}
                  onClick={() => handleSelectWithAutoAdvance('student', internalValue)}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex justify-between mt-8">
            <div />
            <button 
              type="submit" 
              className="bg-[#059669] text-white px-8 py-3 rounded-lg hover:bg-[#047857] transition-colors font-semibold cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Grade/Level */}
      {step === 2 && (
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Which grade/level is {
              form.student === 'my-daughter' ? 'your daughter' : 
              form.student === 'my-son' ? 'your son' : 
              form.student === 'i' ? 'you' : 'the person'
            } in?
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Select the current grade or educational level. We support both Swiss and international curricula.
          </p>
          <select 
            name="grade" 
            value={form.grade} 
            onChange={handleChangeWithAutoAdvance}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#059669] focus:outline-none text-gray-700"
          >
            <option value="">Please select...</option>
            <optgroup label="Swiss Education System">
              {gradeOptions.slice(0, 6).map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </optgroup>
            <optgroup label="Swiss Secondary School">
              {gradeOptions.slice(6, 15).map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </optgroup>
            <optgroup label="Swiss Gymnasium">
              {gradeOptions.slice(15, 21).map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </optgroup>
            <optgroup label="Higher Education">
              {gradeOptions.slice(21).map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </optgroup>
          </select>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              className="text-[#059669] hover:text-[#047857] font-medium cursor-pointer"
              onClick={handleBack}
            >
              ← Back
            </button>
            <button 
              type="submit" 
              className="bg-[#059669] text-white px-8 py-3 rounded-lg hover:bg-[#047857] transition-colors font-semibold cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Subject */}
      {step === 3 && (
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Which subject needs tutoring?
          </h2>
          
          <input 
            name="subject" 
            value={form.subject} 
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#059669] focus:outline-none text-gray-700 mb-4"
            placeholder="Enter subject..."
          />
          
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-3">Or choose from popular options:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {subjectExamples.map(subject => (
                <button
                  key={subject}
                  type="button"
                  className={`border-2 rounded-lg px-4 py-2 text-sm transition-all cursor-pointer ${
                    form.subject === subject
                      ? 'border-[#059669] bg-green-50 text-[#059669]'
                      : 'border-gray-300 hover:border-green-400 text-gray-700'
                  }`}
                  onClick={() => setForm({ ...form, subject })}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>

          {error && <div className="text-red-500 mt-2">{error}</div>}
          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              className="text-[#059669] hover:text-[#047857] font-medium cursor-pointer"
              onClick={handleBack}
            >
              ← Back
            </button>
            <button 
              type="submit" 
              className="bg-[#059669] text-white px-8 py-3 rounded-lg hover:bg-[#047857] transition-colors font-semibold cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
      )}

      {/* Step 4: Postcode */}
      {step === 4 && (
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Where do you live?
          </h2>
          
          <label className="block text-gray-700 mb-2">Swiss Postal Code</label>
          <input 
            name="postcode" 
            value={form.postcode} 
            onChange={handleChangeWithAutoAdvance}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#059669] focus:outline-none text-gray-700"
            placeholder="e.g., 8001"
            maxLength={4}
          />
          <p className="text-sm text-gray-500 mt-2">
            Enter your 4-digit Swiss postal code (e.g., 8001 for Zurich)
          </p>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              className="text-[#059669] hover:text-[#047857] font-medium cursor-pointer"
              onClick={handleBack}
            >
              ← Back
            </button>
            <button 
              type="submit" 
              className="bg-[#059669] text-white px-8 py-3 rounded-lg hover:bg-[#047857] transition-colors font-semibold cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
      )}

      {/* Step 5: Contact Details */}
      {step === 5 && (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Your contact details
          </h2>
          <p className="text-gray-600 mb-6">
            So we can send you our selection of qualified tutors.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Last Name *</label>
              <input 
                name="lastname" 
                value={form.lastname} 
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#059669] focus:outline-none text-gray-700"
                placeholder="Your last name"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Phone Number *</label>
              <input 
                name="phone" 
                value={form.phone} 
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#059669] focus:outline-none text-gray-700"
                placeholder="+41 79 XXX XX XX"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email Address *</label>
              <input 
                name="email" 
                value={form.email} 
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#059669] focus:outline-none text-gray-700"
                placeholder="your@email.com"
                type="email"
                required
              />
            </div>
          </div>

          {error && <div className="text-red-500 mt-4">{error}</div>}
          
          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              className="text-[#059669] hover:text-[#047857] font-medium cursor-pointer"
              onClick={handleBack}
              disabled={loading}
            >
              ← Back
            </button>
            <button 
              type="submit" 
              className="bg-[#059669] text-white px-8 py-3 rounded-lg hover:bg-[#047857] transition-colors font-semibold disabled:opacity-50 cursor-pointer"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}