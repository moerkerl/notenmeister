import { Suspense } from 'react'
import MultiStepForm from '@/components/MultiStepForm'

export const metadata = {
  title: 'Nachhilfe-Lehrer finden - Notenmeister',
  description: 'Finden Sie den passenden Nachhilfe-Lehrer für bessere Noten und mehr Selbstvertrauen.',
}

export default function LehrerFindenPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center">
      <div className="text-gray-600">Lädt...</div>
    </div>}>
      <MultiStepForm />
    </Suspense>
  )
}