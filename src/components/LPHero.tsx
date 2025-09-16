'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, Children, cloneElement, ReactElement } from 'react'

interface LPHeroProps {
  title: string | React.ReactNode
  subtitle: string
  buttonText: string
  imageSrc?: string
  imageAlt?: string
  onButtonClick?: () => void
  isEnglish?: boolean
}

export default function LPHero({ 
  title, 
  subtitle, 
  buttonText, 
  imageSrc, 
  imageAlt,
  onButtonClick,
  isEnglish = false
}: LPHeroProps) {
  const router = useRouter()
  const [shouldHighlight, setShouldHighlight] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick()
    } else {
      const formPath = isEnglish ? '/find-teacher' : '/lehrer-finden'
      router.push(formPath)
    }
  }

  // Handle animation complete
  const handleAnimationComplete = () => {
    if (!hasAnimated) {
      setShouldHighlight(true)
      setHasAnimated(true)
    }
  }

  // Process title to inject animation complete handler - recursive function to find AnimatedText
  const processElement = (element: React.ReactNode): React.ReactNode => {
    if (!element || typeof element !== 'object' || !('props' in element)) {
      return element
    }
    
    const el = element as ReactElement<{ text?: string; onAnimationComplete?: () => void; children?: React.ReactNode; [key: string]: unknown }>
    
    // Check if this is AnimatedText component (has 'text' prop)
    if (el.props && 'text' in el.props) {
      return cloneElement(el, { 
        ...el.props, 
        onAnimationComplete: handleAnimationComplete 
      })
    }
    
    // Recursively process children
    if (el.props?.children) {
      return cloneElement(el, {
        ...el.props,
        children: Children.map(el.props.children, processElement)
      })
    }
    
    return element
  }
  
  const processedTitle = typeof title === 'string' 
    ? title 
    : Children.map(title as React.ReactNode, processElement)

  return (
    <>
      <style jsx>{`
        @keyframes button-glow {
          0% {
            box-shadow: 0 4px 6px -1px rgba(5, 150, 105, 0.1), 0 2px 4px -1px rgba(5, 150, 105, 0.06);
            transform: translateY(0) scale(1);
          }
          50% {
            box-shadow: 0 20px 25px -5px rgba(5, 150, 105, 0.3), 0 10px 10px -5px rgba(5, 150, 105, 0.2);
            transform: translateY(-2px) scale(1.05);
          }
          100% {
            box-shadow: 0 10px 15px -3px rgba(5, 150, 105, 0.2), 0 4px 6px -2px rgba(5, 150, 105, 0.1);
            transform: translateY(0) scale(1);
          }
        }
        
        .button-highlight {
          animation: button-glow 0.6s ease-out;
          box-shadow: 0 10px 15px -3px rgba(5, 150, 105, 0.2), 0 4px 6px -2px rgba(5, 150, 105, 0.1);
        }
      `}</style>
      
      <section className="bg-white md:bg-gradient-to-br md:from-green-50 md:to-white py-20 lg:py-24 mt-2 md:mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid ${imageSrc ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-12 items-center`}>
            <div className="space-y-8 sm:space-y-6 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {processedTitle}
              </h1>
              <p className="text-lg text-gray-600">
                {subtitle}
              </p>
              <div className="flex justify-center md:justify-start">
                <button 
                  onClick={handleClick}
                  className={`
                    bg-[#059669] text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg
                    hover:bg-[#047857] hover:shadow-xl transform hover:-translate-y-0.5 
                    transition-all cursor-pointer whitespace-nowrap
                    ${shouldHighlight ? 'button-highlight ring-2 ring-green-400 ring-opacity-50' : ''}
                  `}
                >
                  {buttonText}
                </button>
              </div>
            </div>
            {imageSrc && (
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt || ''}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl shadow-xl"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}