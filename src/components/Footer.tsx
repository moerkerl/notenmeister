import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-600">
          <p>&copy; 2025 Notenmeister. Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-4">
            <Link href="/datenschutz" className="hover:text-[#059669]">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-[#059669]">Impressum</Link>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Ein Brand der Bildungsinstitut Fokus AG
          </div>
        </div>
      </div>
    </footer>
  )
}