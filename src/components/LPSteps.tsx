'use client'

import { useRouter } from 'next/navigation'

interface Step {
  number: number
  title: string
  description: string
}

interface LPStepsProps {
  title: string
  steps: Step[]
  ctaText?: string
  onCTAClick?: () => void
  isEnglish?: boolean
  onCtaClick?: () => void
}

export default function LPSteps({ title, steps, ctaText, onCTAClick, isEnglish = false, onCtaClick }: LPStepsProps) {
  const router = useRouter()
  
  const handleCTAClick = () => {
    if (onCtaClick || onCTAClick) {
      (onCtaClick || onCTAClick)!()
    } else if (ctaText) {
      router.push(isEnglish ? '/find-teacher' : '/lehrer-finden')
    }
  }

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#059669] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {ctaText && (
          <div className="text-center">
            <button 
              onClick={handleCTAClick}
              className="bg-[#059669] text-white px-8 py-4 rounded-lg hover:bg-[#047857] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
            >
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}