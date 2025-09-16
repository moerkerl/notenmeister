import { Suspense } from 'react'
import EnglishMultiStepForm from '@/components/EnglishMultiStepForm'

export const metadata = {
  title: 'Find Your Tutor - Notenmeister',
  description: 'Find the perfect tutor for better grades and more self-confidence.',
}

export default function FindTeacherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-gray-600">Loading...</div>}>
          <EnglishMultiStepForm />
        </Suspense>
      </div>
    </div>
  )
}