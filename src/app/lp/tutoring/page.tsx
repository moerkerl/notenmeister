'use client'

import { useRouter } from 'next/navigation'
import LPHero from '@/components/LPHero'
import LPBenefits from '@/components/LPBenefits'
import LPSection from '@/components/LPSection'
import LPSteps from '@/components/LPSteps'
import LPTestimonial from '@/components/LPTestimonial'
import LPOffers from '@/components/LPOffers'
import AnimatedText from '@/components/AnimatedText'

export default function EnglishTutoringPage() {
  const router = useRouter()
  
  const benefits = [
    {
      icon: '🏠',
      title: 'Private tutoring at home or online',
      description: 'Flexible tutoring throughout Switzerland and surrounding areas'
    },
    {
      icon: '👥',
      title: 'For all age groups',
      description: 'From primary school to university'
    },
    {
      icon: '🎯',
      title: 'Celebrate sustainable success',
      description: 'Long-term improvement and genuine learning achievements'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Click "Find Your Tutor Now"',
      description: 'Answer a few quick questions online to identify potential tutors in Switzerland for your needs.'
    },
    {
      number: 2,
      title: 'Strategy consultation',
      description: 'Together with a learning strategist, you create a plan to achieve the desired results within your budget.'
    },
    {
      number: 3,
      title: 'Start lessons. Celebrate success',
      description: 'After a non-binding trial lesson, our team implements the plan and improves the student\'s academic skills and confidence.'
    }
  ]

  const testimonials = [
    {
      name: 'The Williams Family from Bern',
      text: 'Thanks to Notenmeister, our son has rediscovered his joy of learning. The 3-phase methodology really worked - the downward spiral became a success spiral. We can only recommend Notenmeister.',
      rating: 5
    },
    {
      name: 'The Thompson Family from Zurich',
      text: 'The 6-step method from Notenmeister helped our daughter overcome her learning blocks. She is now more confident and her grades have improved significantly.',
      rating: 5
    }
  ]

  const offers = [
    {
      icon: '📚',
      title: 'Learning Coaching',
      description: 'Our learning coaches address your students\' individual challenges. Holistic learning coaching is the focus here. The goal is to teach students how to learn.'
    },
    {
      icon: '🎓',
      title: 'Gymnasium Preparation',
      description: 'Our gymnasium specialists prepare students optimally for the gymnasium exam in individual lessons. We respond to your wishes and provide support in all areas.'
    },
    {
      icon: '📐',
      title: 'Subject-Specific Tutoring',
      description: 'Our subject specialists help students where they struggle most. The focus is on specific academic challenges.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <LPHero
        title={
          <>
            <span className="inline-block">Your personal</span>{' '}
            <span className="inline-block">
              <AnimatedText text="selection of tutors" />
            </span>
          </>
        }
        subtitle="Answer a few questions and receive immediate tutor suggestions from your region."
        buttonText="Find Your Tutor Now"
        imageSrc="/images/Beratungsgespräch_im_modernen_Büro_20250318_192326.jpg"
        imageAlt="Professional consultation - Expert explaining learning concept in modern office"
        isEnglish={true}
      />

      {/* Benefits */}
      <LPBenefits benefits={benefits} />

      {/* Problem Section - The 3-Phase Downward Spiral */}
      <LPSection
        title="The dangerous 3-phase downward spiral"
        content="Many students get caught in a vicious cycle of poor grades, declining self-confidence, and further failures."
        bulletPoints={[
          'Phase 1: First poor grades appear - often unnoticed',
          'Phase 2: Self-confidence drops, motivation is lost',
          'Phase 3: Learning blocks develop, downward spiral intensifies',
          'Result: Potential is not realized, future is at risk'
        ]}
        buttonText="Find Your Tutor Now"
        imageSrc="/images/Tochter_5_Klasse_Alleine_stark-frustriert.jpg"
        imageAlt="Frustrated student alone at table - The downward spiral of learning frustration"
        imagePosition="left"
        backgroundColor="gray"
        isEnglish={true}
      />

      {/* Solution Section - Custom Layout with 6-Step Methodology */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title, Subtitle, Button */}
            <div className="space-y-6">
              <p className="text-[#059669] font-semibold uppercase tracking-wide text-sm">
                The Notenmeister Solution
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our proven 6-step methodology
              </h2>
              <p className="text-lg text-gray-600">
                With over 7,000 successful tutors throughout Switzerland, we have developed a methodology that turns the downward spiral into a success spiral.
              </p>
              <button 
                onClick={() => router.push('/find-teacher')}
                className="bg-[#059669] text-white px-8 py-4 rounded-lg hover:bg-[#047857] transition-colors font-semibold shadow-lg cursor-pointer"
              >
                Find Your Tutor Now
              </button>
            </div>

            {/* Right Column - 6 Steps Visualization */}
            <div className="relative">
              {/* Background Graphic - Success Spiral */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M200 50 Q300 100 350 200 Q300 300 200 350 Q100 300 50 200 Q100 100 200 50" 
                        stroke="#059669" strokeWidth="3" fill="none" strokeDasharray="8 4" />
                  <path d="M200 80 Q280 120 320 200 Q280 280 200 320 Q120 280 80 200 Q120 120 200 80" 
                        stroke="#059669" strokeWidth="2" fill="none" strokeDasharray="6 3" />
                  <circle cx="200" cy="80" r="8" fill="#059669" />
                  <circle cx="320" cy="200" r="8" fill="#059669" />
                  <circle cx="200" cy="320" r="8" fill="#059669" />
                  <text x="200" y="200" textAnchor="middle" fill="#059669" fontSize="16" fontWeight="bold">↗</text>
                </svg>
              </div>

              {/* 6 Steps Card */}
              <div className="relative bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-xl border border-green-100">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-sm font-medium text-gray-800">Learning type analysis</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-sm font-medium text-gray-800">Tailored learning strategy</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-sm font-medium text-gray-800">Build self-confidence</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <p className="text-sm font-medium text-gray-800">Resolve learning blocks</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <p className="text-sm font-medium text-gray-800">Sustainable learning techniques</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                    <p className="text-sm font-medium text-gray-800">Achieve autonomous learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <LPSection
        title="Success stories speak for themselves"
        content="From downward spiral to success spiral - see for yourself how Notenmeister has changed the lives of students and families."
        buttonText="Find Your Tutor Now"
        imageSrc="/images/Gemeinsames_Lernen_am_Küchentisch_20250318_192448_Mutter_Tochter.jpg"
        imageAlt="Mother and daughter successfully learning together at the kitchen table"
        imagePosition="right"
        backgroundColor="white"
        isEnglish={true}
      />

      {/* 3 Steps */}
      <LPSteps
        title="3 simple steps to better grades"
        steps={steps}
        ctaText="Find Your Tutor Now"
        isEnglish={true}
        onCtaClick={() => router.push('/find-teacher')}
      />

      {/* Testimonials */}
      <LPTestimonial
        title="Success stories from all over Switzerland"
        testimonials={testimonials}
      />

      {/* Offers */}
      <LPOffers
        title="Our offers throughout Switzerland"
        offers={offers}
      />

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Break the vicious cycle - Now!
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 text-left">
              <p>
                Over 15,000 students have already found their way out of the 3-phase downward spiral with Notenmeister. Our proven 6-step methodology transforms learning frustration into learning success and turns weak students into confident learners.
              </p>
              
              <p>
                With over 7,000 qualified tutors throughout Switzerland, we find the right tutor for every student. Whether at home or online - we bring success directly to you.
              </p>
              
              <p>
                Don&apos;t wait until it&apos;s too late. The sooner you act, the faster we can stop the downward spiral and set a success spiral in motion.
              </p>
            </div>
            
            <button 
              onClick={() => router.push('/find-teacher')}
              className="bg-[#059669] text-white px-8 py-4 rounded-lg hover:bg-[#047857] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
            >
              Find Your Tutor Now
            </button>
          </div>
        </div>
      </section>
    </>
  )
}