'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface LPSectionProps {
  title: string
  content: string
  bulletPoints?: string[]
  buttonText?: string
  imageSrc?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  backgroundColor?: 'white' | 'gray'
  onButtonClick?: () => void
  isEnglish?: boolean
}

export default function LPSection({
  title,
  content,
  bulletPoints = [],
  buttonText,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  backgroundColor = 'white',
  onButtonClick,
  isEnglish = false
}: LPSectionProps) {
  const router = useRouter()
  
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick()
    } else if (buttonText) {
      router.push(isEnglish ? '/find-teacher' : '/lehrer-finden')
    }
  }

  const bgClass = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white'

  const textContent = (
    <div className="space-y-6">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      {content && (
        <p className="text-lg text-gray-600">
          {content}
        </p>
      )}
      {bulletPoints.length > 0 && (
        <ul className="space-y-3">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      )}
      {buttonText && (
        <button 
          onClick={handleClick}
          className="bg-[#059669] text-white px-8 py-4 rounded-lg hover:bg-[#047857] transition-colors font-semibold shadow-lg cursor-pointer"
        >
          {buttonText}
        </button>
      )}
    </div>
  )

  const imageContent = imageSrc ? (
    <div className="relative h-[400px] lg:h-[500px]">
      <Image
        src={imageSrc}
        alt={imageAlt || ''}
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-2xl shadow-lg"
      />
    </div>
  ) : null

  return (
    <section className={`py-20 lg:py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {imagePosition === 'left' ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  )
}